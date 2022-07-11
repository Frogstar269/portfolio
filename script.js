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
            const position = scrollTop / this.devided - 100;
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
            const position = scrollTop / this.devided - 200;
            if (position) {
                document.querySelectorAll(this.target).forEach(element => {
                element.style.backgroundPosition = 'left 50px top -' + position + 'px';
            });
        }
        });
    }
}
  
document.addEventListener('DOMContentLoaded', event => {
    new ParallaxEffectBackground_about();
    new ParallaxEffectBackground_skills();
    new ParallaxEffectBackground_works();
});

const onScroll = () => {
    console.log('scroll');
};
  
window.addEventListener("scroll", () => {
    onScroll();
});