export default class Dimensions {

    constructor(width, height, mt, mr, mb, ml) {
        this.width = width;
        this.height = height;
        this.marginTop = mt;
        this.marginBottom = mb;
        this.marginRight = mr;
        this.marginLeft = ml;
        this.boundedWidth = this.width - this.marginLeft - this.marginRight;
        this.boundedHeight = this.height - this.marginTop - this.marginBottom;
    };

}