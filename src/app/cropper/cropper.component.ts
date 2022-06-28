import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import Cropper from "cropperjs";
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {

  constructor() {
    this.imageDestination = "";
  }

  ngOnInit(): void {
  }

  @Output()
  imgCropped = new EventEmitter();

  @ViewChild("image", { static: false })
  imageElement: ElementRef;

  @Input("src")
  imageSource: string;

  imageDestination: string;
  private cropper: Cropper;

  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png");
      }
    });
  }

  applyCrop() {
    this.imgCropped.emit(this.imageDestination);
  }
}
