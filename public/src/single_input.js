import { Firstpage, Result } from './internal.js';

export class SingleInput extends Firstpage {

    constructor(shapeName) {
        super();
        this.shapeName = shapeName;
        this.label1 = "";
    }

    shapeValues(name, value) {
        let res = new Result(name, value);
        res.result();

    }

    getShape() {
        switch(this.shapeName) {
            case "circle" :
                this.label1 = "Radius";
                this.content2();
                break;
            case "square" :
                this.label1 = "Length";
                this.content2();
                break;
            default :
                this.label1 = "";
        }
    }

    content2() {
        this.heading.innerHTML = "Step 2 : Insert your values";
        this.subHeading.innerHTML = `You have selected a ${this.shapeName}, please input<br> the required variables`;
        this.mainContent.innerHTML = `<label for="val1">${this.label1}: </label><input type="text" class="text-dimension-1" name="length" id="val1" value="">`;
        this.button.innerHTML = 'Go to step 3';
        document.querySelector("#cancel").style.display = "inline-block";

        document.querySelector("#btn").addEventListener("click", () => {
            let val = document.querySelector('#val1').value;
            this.shapeValues(this.shapeName, val);
        },{ once: true });
    }
}