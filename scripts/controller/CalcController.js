class CalcController{
    constructor(){
        this._displayCalc = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._hourEl= document.querySelector("#hour");
        this._currentdate;
    }

    get display (){
        return this._displayCalc;
    }

    set display (value){
        this._displayCalc = value;
    }

    get date (){
        return this._dateEl;
    }

    set date (value){
        this._dateEl.innerHTML = toLocaleDate.querySelector("#date");
    }

    get hour (){
        return this._hourEl;
    }

    set hour (value){
        this._hourEl.innerHTML = value;
    }

    get currentdate (){
        return this._currentdate;
    }

    set currentdate(value){
        this._currentdate = value;
    }

}