import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

const items = [
    {
        name: "Something"
    },
    {
        name: "Something"
    },
    {
        name: "Something"
    },
    {
        name: "Something"
    }
]

@Component({
    selector: 'listViewAdmin',
    templateUrl: './listViewAdmin.component.html',
    styleUrls: ['./listViewAdmin.component.css']
})

export class ListViewAdminComponent implements OnInit {

    items = items;

    constructor() { }

    ngOnInit() {
        
    }
}
