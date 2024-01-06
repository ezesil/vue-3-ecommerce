import type { Product } from "./Product";

export type ProductSorterFunction<T> = (products: T[]) => SorterResultBox<any>;
export type SorterDict = { [key: string]: ProductSorterFunction<any> }

export class SorterConfigurator{
    static createSorterDict(sorters: ISorter<any>[]): SorterDict{
        const sorterDict: SorterDict = {};
        sorters.forEach(x => {
            sorterDict[x.AscSortName] = x.SortAsc.bind(x);
            sorterDict[x.DescSortName] = x.SortDesc.bind(x);
        });
        return sorterDict;
    }        
}
export class SorterResultBox<T>{
    name: string;
    result: T[];

    constructor(name: string, result: T[]){
        this.name = name;
        this.result = result;
    }
}
export interface ISorter<T>{
    name: string;
    AscSortName: string;
    DescSortName: string;
    ascSortFunction: (a:T, b:T) => any;
    descSortFunction: (a:T, b:T) => any;
    
    SortAsc:ProductSorterFunction<T>
    SortDesc:ProductSorterFunction<T>
}
export class GenericSorter<T> implements ISorter<T>{
    name: string;
    AscSortName: string;
    DescSortName: string;
    ascSortFunction: (a:T, b:T) => any;
    descSortFunction: (a:T, b:T) => any;

    constructor(name: string, ascSortFunction:any, descSortFunction:any){
        this.name = name;
        this.AscSortName = name + "Asc";
        this.DescSortName = name + "Desc";
        this.ascSortFunction = ascSortFunction;
        this.descSortFunction = descSortFunction;
    }
   
    SortAsc(list: T[]): SorterResultBox<T> {
        return new SorterResultBox(this.AscSortName, list.sort(this.ascSortFunction));
    }
    SortDesc(list: T[]): SorterResultBox<T> {
        return new SorterResultBox(this.DescSortName, list.sort(this.descSortFunction));
    }
}
export class ProductPriceSorter extends GenericSorter<Product>{
    static name: string = "productPrice";
    static AscSortName = ProductPriceSorter.name + "Asc";
    static DescSortName = ProductPriceSorter.name + "Desc";

    constructor(){
        const ascSortFunction = (a: Product, b: Product) => a.price - b.price; // Restar para orden ascendente
        const descSortFunction = (a: Product, b: Product) => b.price - a.price; // Restar para orden descendente
    
        super(
            ProductPriceSorter.name, 
            ascSortFunction, 
            descSortFunction
        )
    }
}
export class ProductNameSorter extends GenericSorter<Product>{
    static name: string = "productName";
    static AscSortName = ProductNameSorter.name + "Asc";
    static DescSortName = ProductNameSorter.name + "Desc";
    
    constructor(){     

        const ascSortFunction = (a:Product, b:Product) => a.name.localeCompare(b.name);
        const descSortFunction = (a:Product, b:Product) => b.name.localeCompare(a.name);

        super(
            ProductNameSorter.name, 
            ascSortFunction, 
            descSortFunction
        )
    }
}










