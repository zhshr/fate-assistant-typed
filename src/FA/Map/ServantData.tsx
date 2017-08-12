import ClassIconProvider from './ClassIcons/ClassIconProvider';
export default class ServantData {
    name: string;
    image: string;
    constructor(name: string, className: string) {
        this.name = name;
        this.image = ClassIconProvider.get(className, "gold");
    }
}