export default class Dimensions {

    constructor(width, ml, mt, mr, mb) {
        this.width = width;
        this.height = width * 1;
        this.marginLeft = ml;
        this.marginTop = mt;
        this.marginRight = mr;
        this.marginBottom = mb;

        this.boundedWidth = this.width - this.marginLeft - this.marginRight;
        this.boundedHeight = this.height - this.marginTop - this.marginBottom;
    };

}