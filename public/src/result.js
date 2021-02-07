import { Firstpage } from "./internal.js";

export class Result extends Firstpage {
    constructor(name, value1, value2) {
        super();
        this.name = name;
        this.value1 = value1;
        this.value2 = value2 || "";
        this.dimension = "";
        this.area = 0;
    }

    result() {
        switch (this.name) {
            case "rectangle" : 
                this.area = this.value1 * this.value2;
                this.dimension = "length and breadth";
                this.resultContent();
                break;
            case "circle" : 
                this.area = Math.round(Math.PI * this.value1 * this.value1);
                this.dimension = "radius";
                this.resultContent();
                break;
            case "square" : 
                this.area = this.value1 * this.value1;
                this.dimension = "side";
                this.resultContent();
                break;
            case "ellipse" : 
                this.area = Math.round(Math.PI * this.value1 * this.value2);
                this.dimension = "major axis and minor axis";
                this.resultContent();
                break;
        }
    }

    resultContent() {
        this.heading.innerHTML = "Step 3 : Your Results";
        this.subHeading.innerHTML = `You have calculated the area of a ${this.name} <br> with ${this.dimension} of ${this.value1} ${this.value2 ? "and " : ""}${this.value2}. Below is your result`;
        this.mainContent.innerHTML = `<div id="result">The Area is  ${this.area}</div>`;
        this.button.innerHTML = 'Start over';
        document.querySelector("#cancel").style.display = "none";

        document.querySelector("#btn").addEventListener("click", () => {
            this.content();
        },{ once: true });
    }
}