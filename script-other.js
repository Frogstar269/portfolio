
/* パララックス */
class ParallaxEffectBackground_about {
    constructor() {
        this.devided = 7;
        this.target = '.ab-img';
        this.setBackgroundPosition();
    }
  
    getScrollTop() {
        return Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop,
            window.scrollY
        );
    }
  
    setBackgroundPosition() {
        document.addEventListener('scroll', e => {
            const scrollTop = this.getScrollTop();
            const position = scrollTop / this.devided;
            if (position) {
                document.querySelectorAll(this.target).forEach(element => {
                element.style.backgroundPosition = 'left 0px top -' + position + 'px';
            });
        }
        });
    }
}
 
document.addEventListener('DOMContentLoaded', event => {
    new ParallaxEffectBackground_about();
});

/* レイジーロード */
const options1 = {
    root: null,
    rootMargin: "-290px 0px",
    threshold: 0
};
const options3 = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: 0
};

const lazy = function(entries, observer) {//表示時animation用
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("lazy");
        }
    })
}

const elm1 = document.querySelector(".about-container");
const io1 = new IntersectionObserver(lazy,options1);
io1.observe(elm1);

const elm2 = document.querySelector("#explain .box1");
const io2 = new IntersectionObserver(lazy,options1);
io2.observe(elm2);

const elm3 = document.querySelector("#explain .box2");
const io3 = new IntersectionObserver(lazy,options1);
io3.observe(elm3);