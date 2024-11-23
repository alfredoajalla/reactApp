
class ShareValueChildren {
    private value: any;

    constructor(value: string) {
        this.value = value;
    }
    
    getValue() {
        return this.value;
    } 

    setValue(value: string) {
        if (value.length < 1) {
            throw new Error("value should be string and have to have at least a character")
        }
        this.value = value
    }
}

export const shareValueChildren = new ShareValueChildren("");
