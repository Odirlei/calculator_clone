class CalcController{
    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._hourEl = document.querySelector("#hour");
        this._currentdate;
        this.initialize();
    }

    initialize(){
       
        //refactory this part of code for date and hour//
        this._dateEl.innerHTML = "16/04/2020";
        this._hourEl.innerHTML = "01:08 am";
    }

    get display(){
        return this._displayCalcEl.innerHTML;
    }

    set display(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentdate (){
        return this._currentdate;
    }

    set currentdate(value){
        this._currentdate = value;
    }

}