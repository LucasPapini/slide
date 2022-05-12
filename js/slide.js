export default class Slide {
  constructor(slide, wrapper){
    this.slide   = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStar(e){
    e.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(e){
  
  }

  onEnd(){
    
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents(){
    this.wrapper.addEventListener('mousedown', this.onStar);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents(){
    this.onStar = this.onStar.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd  = this.onEnd.bind(this);
  }

  init(){
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}