import { Component, OnInit } from '@angular/core';
import { TemplateRef} from '@angular/core';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-toast-container',
  //templateUrl: './toast-container.component.html',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>
      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'},
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService: ToastService) {}

 isTemplate(toast) {
   return toast.textOrTpl instanceof TemplateRef;
  }

  ngOnInit(): void {
  }

}
