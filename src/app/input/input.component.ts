import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  startRecording:boolean = true;
  mediaRecorder:any;
  audioChunks:any = [];
  audioUrl:any;
  playAudioOption:boolean = false;
  constructor(private commonService : CommonServiceService) { }

  ngOnInit(): void {
  }

  startRecordingMethod(){
    this.audioChunks = [];
    this.playAudioOption = false;
    this.startRecording = false;
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start();

      this.audioChunks = [];
      this.mediaRecorder.addEventListener("dataavailable", (event: { data: any; }) => {
        this.audioChunks.push(event.data);
      });

      this.mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(this.audioChunks);
        this.audioUrl = URL.createObjectURL(audioBlob);
      });

  });
  }

  stopRecordingMethod()
  {
    this.playAudioOption = true;
    this.startRecording = true;
    this.mediaRecorder.stop();
    //send the API request here, when stopped
    let receivedJSON = this.commonService.sendAudio(this.audioUrl);
    console.log(receivedJSON);
    //try to receive the response in the output component


  }

  playAudio(){
    const audio = new Audio(this.audioUrl);
    audio.play();
  }

}
