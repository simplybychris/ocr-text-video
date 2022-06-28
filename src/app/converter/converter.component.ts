import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  blobURL: any = null;
  url: any = null;
  imgSrc: string = '';
  imageProcessed: boolean = false;
  isLoading: boolean = false;
  isCropping: boolean = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  getFileDetails($event: Event) {
  }

  // processNext() {
  // }
  imgText: string = '';

  fileEvent(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  getScreenshot(scale: any) {
    scale = scale || 1;
    const videoEl = this.elRef.nativeElement.querySelector('video');
    const canvas = document.createElement("canvas");
    canvas.width = videoEl.clientWidth * scale;
    canvas.height = videoEl.clientHeight * scale;
    canvas.getContext('2d')!.drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    this.imgSrc = canvas.toDataURL();
    // image.src = canvas.toDataURL();

    this.imageProcessed = true;
    // return image;
  }

  async doOCR() {
    console.log('dziala?', this.isLoading)
    this.isLoading = true;
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(this.imgSrc);
    // const myRegexp = /^(.*\/)/g;
    // const match = myRegexp.exec(text);
    // if (match) {
    this.imgText = this.trimStringBefore(text, '<');
    this.imgText = this.trimStringAfter(text, '>');
    this.isLoading =  false;
    await worker.terminate();
  }


  trimStringAfter(haystack: string, needle: string) {
    const lastIndex = haystack.lastIndexOf(needle);
    return haystack.substring(0, lastIndex === -1 ? haystack.length : lastIndex + 1)
  }

  private trimStringBefore(text: string, s: string) {
    const lastIndex = text.indexOf(s);
    return text.substring(lastIndex === -1 ? 0 : lastIndex + 1, text.length)
  }

  onImageCrop(croppedImg: any) {
    this.imgSrc = croppedImg;
    this.isCropping = false;
  }
}
