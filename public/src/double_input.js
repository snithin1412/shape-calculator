import { Firstpage, Result } from './internal.js';

export class DoubleInput extends Firstpage {

    constructor(shapeName) {
        super();
        this.shapeName = shapeName;
        this.label1 = "";
        this.label2 = "";
    }

    shapeValues(name, value1, value2) {
        let res = new Result(name, value1, value2);
        res.result();

    }

    getShape() {
        switch(this.shapeName) {
            case "rectangle" :
                this.label1 = "length";
                this.label2 = "breadth";
                this.content2();
                break;
            case "ellipse" :
                this.label1 = "Major Axis";
                this.label2 = "Minor Axis";
                this.content2();
                break;
            default :
                this.label1 = "";
                this.label2 = "";
        }
    }

    content2() {
        this.heading.innerHTML = "Step 2 : Insert your values";
        this.subHeading.innerHTML = `You have selected a ${this.shapeName}, please input<br> the required variables`;
        this.mainContent.innerHTML = `<label for="val1">${this.label1}: </label><input type="text" class="text-dimension" name="length" id="val1" value=""><label for="val1">${this.label2}: </label><input type="text" class="text-dimension" name="width" id="val2" value="">`;
        this.button.innerHTML = 'Go to step 3';
        document.querySelector("#cancel").style.display = "inline-block";

        document.querySelector("#btn").addEventListener("click", () => {
            let val1 = document.querySelector('#val1').value;
            let val2 = document.querySelector('#val2').value;
            this.shapeValues(this.shapeName, val1, val2);
        },{ once: true });
    }
}