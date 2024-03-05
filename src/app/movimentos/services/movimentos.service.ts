import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { MovimentosInterface } from "../interface/movimentos";

@Injectable({
    providedIn: 'root'
})

export class MovimentosService{

    constructor(private httpClient:HttpClient){}

    getMovimentos():Observable<MovimentosInterface[]>{
        return this.httpClient.get<MovimentosInterface[]>('http://localhost:3000/movimentos').pipe(
            tap((dados) => console.log('Tap dados',dados))
        );
    }
}