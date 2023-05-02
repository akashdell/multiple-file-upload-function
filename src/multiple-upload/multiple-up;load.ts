<div *ngIf="selected.type === 'image/png'" [ngClass]="displayingPng ? 'isDisplay' : '' ">

<div *ngFor="let file of files">

<img [src]="file.url" width="50px">



</div>

<p>inside</p>

</div>