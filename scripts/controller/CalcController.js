class CalcController{
    constructor(){
        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#date");
        this._hourEl = document.querySelector("#hour");
        this._currentdate;
        this.initialize();
    }

    initialize(){ 
       
        setInterval(()=>{

            this.CalcDate = this.currentdate.toLocaleDateString(this._locale);
            this.CalcHour = this.currentdate.toLocaleTimeString(this._locale);

        },1000 );
       
        
    }

    get CalcDisplay(){
        return this._displayCalcEl.innerHTML;
    }

    set CalcDisplay(value){
        this._displayCalcEl.innerHTML = value;
    }

    get CalcDate(){
        return this._dateEl.innerHTML;
    }

    set CalcDate(value){
        this._dateEl.innerHTML = value;
    }

    get CalcHour(){
        return this._hourEl.innerHTML;
    }

    set CalcHour(value){
        this._hourEl.innerHTML = value;
    }
    

    get currentdate (){
        return new Date();
    }

    set currentdate(value){
        this._currentdate = value;
    }

}