
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
                element.style.backgroundPosition = 'left 50px top -' + position + 'px';
            });
        }
        });
    }
}
class ParallaxEffectBackground_skills {
    constructor() {
        this.devided = 7;
        this.target = '.sk-img';
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
            const position = scrollTop / this.devided - 70;
            if (position) {
                document.querySelectorAll(this.target).forEach(element => {
                element.style.backgroundPosition = 'left 50px top -' + position + 'px';
            });
        }
        });
    }
}
class ParallaxEffectBackground_works {
    constructor() {
        this.devided = 7;
        this.target = '.wk-img';
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
            const position = scrollTop / this.devided - 250;
            if (position) {
                document.querySelectorAll(this.target).forEach(element => {
                element.style.backgroundPosition = 'left 50px top -' + position + 'px';
            });
        }
        });
    }
}
class appere_leave {
    constructor() {
        this.devided = 7;
        this.target = '.AandL';
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
            var elm = document.querySelector(this.target);
            if (scrollTop>0) {
                document.querySelectorAll(this.target).forEach(element => {
                    element.classList.add("leave");
                    element.classList.remove("appear");
                });
            }else{
                document.querySelectorAll(this.target).forEach(element => {
                    element.classList.add("appear");
                    element.classList.remove("leave");
                });
            }
        });
    }
}

class hero {
    constructor() {
        this.devided = 7;
        this.target = '.hero';
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
        var judge = 0;
        document.addEventListener('scroll', e => {
            const scrollTop = this.getScrollTop();
            var elm = document.querySelector(this.target);
            if (scrollTop>0 && judge==0) {
                document.querySelectorAll(this.target).forEach(element => {
                    heroLeave('.hero');
                });
                judge = 1;
            }else if(scrollTop==0){
                document.querySelectorAll(this.target).forEach(element => {
                    heroAppear('.hero');
                });
                judge = 0;
            }
        });
    }
}
  
document.addEventListener('DOMContentLoaded', event => {
    new ParallaxEffectBackground_about();
    new ParallaxEffectBackground_skills();
    new ParallaxEffectBackground_works();
    new appere_leave();
    new hero();
});

/* 画像スライドショー */
window.addEventListener('load', function () {
	viewSlide('.hero-img img');
});
function viewSlide(className, slideNo = -1)
{
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを消す
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;
	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}
	imgArray[slideNo].style.opacity = 1;
	let msec = 2000;
	setTimeout(function(){viewSlide(className, slideNo);}, msec);
}
var timeout_id = null;

function heroAppear(className){
    var hero = document.querySelector(className);
    clearTimeout(timeout_id);
    hero.classList.add("active");
}
function heroLeave(className){
    var hero = document.querySelector(className);
    if( hero.classList.contains('active') == true ){
        timeout_id = setTimeout(() => {hero.classList.remove("active");}, 1500);
    }
}

/* レイジーロード */
const options1 = {
    root: null,
    rootMargin: "-290px 0px",
    threshold: 0
};
const options2 = {
    root: null,
    rootMargin: "-340px 0px",
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

const elm2 = document.querySelector(".skills-container");
const io2 = new IntersectionObserver(lazy,options1);
io2.observe(elm2);

const elm3 = document.querySelector(".scroll");
const io3 = new IntersectionObserver(lazy,options2);
io3.observe(elm3);

const elm4 = document.querySelector(".contact-container .box");
const io4 = new IntersectionObserver(lazy,options3);
io4.observe(elm4);