import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotifyCode';

  trackUrl: any;
  images: Array<string> = [];

  onSubmit(): void {
    const hex = this.createRandomColor();
    this.images.push(this.createImageUrl(hex, "white", this.trackUrl));
    console.log(this.images);
    
  }


  createRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createImageUrl(colorCode: string, color: string, trackUrl: string) {
    const url = `http://www.spotifycodes.com/downloadCode.php?uri=jpeg/${colorCode}/${color}/640/${trackUrl}`
    console.log(url);
    
    return url;
  }


  // Sample url
  // http://www.spotifycodes.com/downloadCode.php?uri=jpeg%2FF40D2F%2Fwhite%2F640%2Fspotify%3Atrack%3A2ap1x3VLFXzeVRDl14PYsM

  // http://www.spotifycodes.com/downloadCode.php?uri=jpeg/F40D2F/white/999/spotify:track:2ap1x3VLFXzeVRDl14PYsMjpeg
  // http://www.spotifycodes.com/downloadCode.php?uri={format}/{background color code}/{text color}/{size in px}/{track uri}
}

