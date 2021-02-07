import { DoubleInput, SingleInput } from './internal.js';

export class Firstpage {
    constructor() {
        this.heading = document.querySelector("#heading");
        this.subHeading = document.querySelector("#sub-heading");
        this.mainContent = document.querySelector("#main-content");
        this.button = document.querySelector("#btn");
    }

    shape(selected) {
        switch (selected) {
            case "rectangle":
                let rect = new DoubleInput(selected, "rectangle");
                rect.getShape();
                break;
            case "circle":
                let crc = new SingleInput(selected);
                crc.getShape();
                break;
            case "square":
                let sqr = new SingleInput(selected);
                sqr.getShape();
                break;
            case "ellipse":
                let elp = new DoubleInput(selected, "ellipse");
                elp.getShape();
                break;
            default : this.content();
          }
    }
    
    content () {
        this.heading.innerHTML = "Step1 : Select your shape";
        this.subHeading.innerHTML = "Please select the shape that you would like <br> to calculate the area of and press the <br> button &quot;Go to step 2&quot;";
        this.mainContent.innerHTML = '<ul><li><input type="radio" name="shape" value="rectangle" id="rectangle" checked><label for="rectangle">Rectangle</label></li><li><input type="radio" name="shape" value="circle" id="circle"><label for="circle">Circle</label></li><li><input type="radio" name="shape" value="square" id="square"><label for="square">Square</label></li><li><input type="radio" name="shape" value="ellipse" id="ellipse"><label for="ellipse">Ellipse</label></li></ul>';
        this.button.innerHTML = 'Go to step 2';
        document.querySelector("#cancel").style.display = "none";

        document.querySelector("#btn").addEventListener("click", () => {
            let selectedShape = document.querySelector('input[name = shape]:checked').value;
            this.shape(selectedShape);
        },{ once: true });
    }

}