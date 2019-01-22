import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import RFB from '@novnc/novnc/core/rfb.js';

@Component({
  selector: 'app-app01',
  templateUrl: './app01.component.html',
  styleUrls: ['./app01.component.css']
})
export class App01Component implements OnInit, OnDestroy {
  
  rfb: RFB;
  
  connected: boolean = false;
  
  observer: MutationObserver;
  
  constructor(
    private router: Router,
	private http: HttpClient
  ) { }

  rfb_container_height: number = 0;
  rfb_container_width: number = 0;
  x_coordinate: number = 0;
  y_coordinate: number = 0;
  vertical_resize: boolean = false;
  horizontal_resize: boolean = false;

  x_max: number = 25 + 1;
  y_max: number = 100 + 25 + 1;

  horizontal_handler_background: string = 'black';
  vertical_handler_background: string = 'black';
  
  rfb_container_visibility: string = 'visible';

  keyboard_display: string = 'none';

  shift_key: boolean = false;
  mayus_key: boolean = false;
  altgr_key: boolean = false;
  alt_key: boolean = false;
  ctrl_key: boolean = false;
  blqnum_key: boolean = true;

  clickedShiftKey () {
    this.shift_key = !this.shift_key;
  }

  clickedMayusKey () {
    this.mayus_key = !this.mayus_key;
  }

  clickedCtrlKey () {
    this.ctrl_key = !this.ctrl_key;
  }
  
  clickedAltKey () {
    this.alt_key = !this.alt_key;
  }
  
  clickedAltGrKey () {
    this.altgr_key = !this.altgr_key;
  }
  
  clickedBlqNumKey () {
    this.blqnum_key = !this.blqnum_key;
  }
  
  sendKey (code) {
	let keysym = 0;
    if (code.startsWith('Key')) {
	  if (code === 'KeyA') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 65;
		}
		else {
		  keysym = 97;
		}
	  }
	  else if (code === 'KeyB') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 66;
		}
		else {
		  keysym = 98;
		}
	  }
	  else if (code === 'KeyC') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 67;
		}
		else {
		  keysym = 99;
		}
	  }
	  else if (code === 'KeyD') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 68;
		}
		else {
		  keysym = 100;
		}
	  }
	  else if (code === 'KeyE') {
		if (this.altgr_key && !this.shift_key) {
		  keysym = 8364;
		}
		else if (this.mayus_key || this.shift_key) {
		  keysym = 69;
		}
		else {
		  keysym = 101;
		}
	  }
	  else if (code === 'KeyF') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 70;
		}
		else {
		  keysym = 102;
		}
	  }
	  else if (code === 'KeyG') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 71;
		}
		else {
		  keysym = 103;
		}
	  }
	  else if (code === 'KeyH') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 72;
		}
		else {
		  keysym = 104;
		}
	  }
	  else if (code === 'KeyI') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 73;
		}
		else {
		  keysym = 105;
		}
	  }
	  else if (code === 'KeyJ') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 74;
		}
		else {
		  keysym = 106;
		}
	  }
	  else if (code === 'KeyK') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 75;
		}
		else {
		  keysym = 107;
		}
	  }
	  else if (code === 'KeyL') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 76;
		}
		else {
		  keysym = 108;
		}
	  }
	  else if (code === 'KeyM') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 77;
		}
		else {
		  keysym = 109;
		}
	  }
	  else if (code === 'KeyN') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 78;
		}
		else {
		  keysym = 110;
		}
	  }
	  else if (code === 'KeyO') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 79;
		}
		else {
		  keysym = 111;
		}
	  }
	  else if (code === 'KeyP') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 80;
		}
		else {
		  keysym = 112;
		}
	  }
	  else if (code === 'KeyQ') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 81;
		}
		else {
		  keysym = 113;
		}
	  }
	  else if (code === 'KeyR') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 82;
		}
		else {
		  keysym = 114;
		}
	  }
	  else if (code === 'KeyS') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 83;
		}
		else {
		  keysym = 115;
		}
	  }
	  else if (code === 'KeyT') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 84;
		}
		else {
		  keysym = 116;
		}
	  }
	  else if (code === 'KeyU') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 85;
		}
		else {
		  keysym = 117;
		}
	  }
	  else if (code === 'KeyV') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 86;
		}
		else {
		  keysym = 118;
		}
	  }
	  else if (code === 'KeyW') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 87;
		}
		else {
		  keysym = 119;
		}
	  }
	  else if (code === 'KeyX') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 88;
		}
		else {
		  keysym = 120;
		}
	  }
	  else if (code === 'KeyY') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 89;
		}
		else {
		  keysym = 121;
		}
	  }
	  else if (code === 'KeyZ') {
		if (this.mayus_key || this.shift_key) {
		  keysym = 90;
		}
		else {
		  keysym = 122;
		}
	  }
	}
	else if (code.startsWith('Digit')) {
	  if (code === 'Digit0') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 61;
		}
		else {
		  keysym = 48;
		}
	  }
	  else if (code === 'Digit1') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 33;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 124;
		}
		else {
		  keysym = 49;
		}
	  }
	  else if (code === 'Digit2') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 34;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 64;
		}
		else {
		  keysym = 50;
		}
	  }
      else if (code === 'Digit3') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 183;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 35;
		}
		else {
		  keysym = 51;
		}
	  }
	  else if (code === 'Digit4') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 36;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 126;
		}
		else {
		  keysym = 52;
		}
	  }		
	  else if (code === 'Digit5') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 37;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 8364;
		}
		else {
		  keysym = 53;
		}
	  }
	  else if (code === 'Digit6') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 38;
		}
		else if (this.altgr_key && !this.shift_key) {
		  keysym = 172;
		}
		else {
		  keysym = 54;
		}
	  }
	  else if (code === 'Digit7') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 47;
		}
		else {
		  keysym = 55;
		}
	  }
	  else if (code === 'Digit8') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 40;
		}
		else {
		  keysym = 56;
		}
	  }
	  else if (code === 'Digit9') {
		if (!this.altgr_key && this.shift_key) {
		  keysym = 41;
		}
		else {
		  keysym = 57;
		}
	  }
	}
	else if (code.startsWith('Numpad')) {
	  if (code === 'Numpad0') {
		if (this.blqnum_key) {
 	      keysym = 48;
		}
		else {
		  keysym = 65379;
		}
	  }
	  else if (code === 'Numpad1') {
		if (this.blqnum_key) {
 	      keysym = 49;
		}
		else {
		  keysym = 65367;
		}
	  }
	  else if (code === 'Numpad2') {
		if (this.blqnum_key) {
 	      keysym = 50;
		}
		else {
		  keysym = 2302;
		}
	  }
	  else if (code === 'Numpad3') {
		if (this.blqnum_key) {
 	      keysym = 51;
		}
		else {
		  keysym = 65364;
		}
	  }
	  else if (code === 'Numpad4') {
		if (this.blqnum_key) {
 	      keysym = 52;
		}
		else {
		  keysym = 2299;
		}
	  }
	  else if (code === 'Numpad5') {
		if (this.blqnum_key) {
 	      keysym = 53;
		}
		else {
		  keysym = 65291;
		}
	  }
	  else if (code === 'Numpad6') {
		if (this.blqnum_key) {
 	      keysym = 54;
		}
		else {
		  keysym = 2301;
		}
	  }
	  else if (code === 'Numpad7') {
		if (this.blqnum_key) {
 	      keysym = 55;
		}
		else {
		  keysym = 65360;
		}
	  }
	  else if (code === 'Numpad8') {
		if (this.blqnum_key) {
 	      keysym = 56;
		}
		else {
		  keysym = 2300;
		}
	  }
	  else if (code === 'Numpad9') {
		if (this.blqnum_key) {
 	      keysym = 57;
		}
		else {
		  keysym = 65362;
		}
	  }
	  else if (code === 'NumpadDecimal') {
		if (this.blqnum_key) {
 	      keysym = 46;
		}
		else {
		  keysym = 65535;
		}
	  }
	  else if (code === 'NumpadEnter') {
        keysym = 65293;
	  }
	  else if (code === 'NumpadAdd') {
        keysym = 43;
	  }
	  else if (code === 'NumpadSubstract') {
        keysym = 45;
	  }
	  else if (code === 'NumpadMultiply') {
        keysym = 42;
	  }
	  else if (code === 'NumpadDivide') {
        keysym = 47;
	  }
    }
	else if (code === 'Backquote') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 170;
	  }
	  else if (this.altgr_key && !this.shift_key) {
		keysym = 92;
	  }
	  else {
		keysym = 186;
	  }
	}
	else if (code === 'Minus') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 63;
	  }
	  else {
		keysym = 39;
	  }
	}
	else if (code === 'Equal') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 191;
	  }
	  else {
		keysym = 161;
	  }
	}
	else if (code === 'Backspace') {
	  keysym = 65288;
	}
	else if (code === 'BracketLeft') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 94;
	  }
	  else if (this.altgr_key && !this.shift_key) {
		keysym = 91;
	  }
	  else {
		keysym = 96;
	  }
	}
	else if (code === 'BracketRight') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 42;
	  }
	  else if (this.altgr_key && !this.shift_key) {
		keysym = 93;
	  }
	  else {
		keysym = 43;
	  }
	}
	else if (code === 'Enter') {
	  keysym = 65293
	}
	else if (code === 'Semicolon') {
	  if (this.mayus_key || this.shift_key) {
		keysym = 209;
	  }
	  else {
		keysym = 241;
	  }
	}
	else if (code === 'Quote') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 168;
	  }
	  else if (this.altgr_key && !this.shift_key) {
		keysym = 123;
	  }
	  else {
		keysym = 180;
	  }
	}
	else if (code === 'Backslash') {
	  if (this.altgr_key && !this.shift_key) {
	    keysym = 124;
	  }
	  else if (this.mayus_key || this.shift_key) {
	    keysym = 199;
	  }
	  else {
	    keysym = 231;
	  }
	}
	else if (code === 'Comma') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 59;
	  }
	  else {
		keysym = 44;
	  }
	}
	else if (code === 'Period') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 58;
	  }
	  else {
		keysym = 46;
	  }
	}	
	else if (code === 'Slash') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 95;
	  }
	  else {
		keysym = 45;
	  }
	}	
	else if (code === 'IntlBackslash') {
	  if (!this.altgr_key && this.shift_key) {
		keysym = 62;
	  }
	  else {
		keysym = 60;
	  }
	}
	else if (code === 'Tab') {
	  keysym = 65289;
	}
	else if (code === 'ScrollLock') {
      keysym = 65300;
    }
	else if (code === 'Pause') {
      keysym = 65299;
    }
	else if (code === 'Escape') {
      keysym = 65307;
    }
	else if (code === 'ArrowLeft') {
	  keysym = 65361;
	}
	else if (code === 'ArrowDown') {
	  keysym = 65364;
	}
	else if (code === 'ArrowRight') {
	  keysym = 65363;
	}
	else if (code === 'ArrowUp') {
	  keysym = 65362;
	}
	else if (code === 'Space') {
	  keysym = 65408;
	}
	else if (code === 'OSLeft') {
	  keysym = 91;
	}
	else if (code === 'OSRight') {
	  keysym = 92;
	}
	else if (code === 'ContextMenu') {
      keysym = 65383;
    }
	else if (code === 'Insert') {
	  keysym = 65379;
	}
	else if (code === 'Home') {
	  keysym = 65360;
	}
	else if (code === 'PageUp') {
	  keysym = 65365;
	}
	else if (code === 'Delete') {
	  keysym = 65535;
	}
	else if (code === 'End') {
	  keysym = 65367;
	}
	else if (code === 'PageDown') {
	  keysym = 65366;
	}
	else if (code === 'F1') {
	  keysym = 65470;
	}
	else if (code === 'F2') {
	  keysym = 65471;
	}
	else if (code === 'F3') {
	  keysym = 65472;
	}
	else if (code === 'F4') {
	  keysym = 65473;
	}
	else if (code === 'F5') {
	  keysym = 65474;
	}
	else if (code === 'F6') {
	  keysym = 65475;
	}
	else if (code === 'F7') {
	  keysym = 65476;
	}
	else if (code === 'F8') {
	  keysym = 65477;
	}
	else if (code === 'F9') {
	  keysym = 65478;
	}
	else if (code === 'F10') {
	  keysym = 65479;
	}
	else if (code === 'F11') {
	  keysym = 65480;
	}
	else if (code === 'F12') {
	  keysym = 65481;
	}

	if (this.alt_key && this.ctrl_key) {
  	  this.rfb.sendKey(65507, 'ControlLeft', true);
  	  this.rfb.sendKey(65513, 'AltLeft', true);
	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', true);
	  }
  	  this.rfb.sendKey(keysym, code);
	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', false);
	  }
  	  this.rfb.sendKey(65513, 'AltLeft', false);
  	  this.rfb.sendKey(65507, 'ControlLeft', false);
	}
	else if (this.alt_key && !this.ctrl_key) {
  	  this.rfb.sendKey(65513, 'AltLeft', true);
  	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', true);
	  }
  	  this.rfb.sendKey(keysym, code);
  	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', false);
	  }
  	  this.rfb.sendKey(65513, 'AltLeft', false);
	}
	else if (!this.alt_key && this.ctrl_key) {
   	  this.rfb.sendKey(65507, 'ControlLeft', true);
  	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', true);
	  }
  	  this.rfb.sendKey(keysym, code);
  	  if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', false);
	  }
  	  this.rfb.sendKey(65507, 'ControlLeft', false);
	}
	else {
      if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', true);
	  }
  	  this.rfb.sendKey(keysym, code);
      if (this.shift_key) {
		this.rfb.sendKey(65505, 'ShiftLeft', false);
	  }
	}
  }

  showKeyboard() {
    if (this.y_max === (100 + 25 + 1)) {
      this.y_max = 100 + 25 + 1 + 375;
      this.keyboard_display = 'flex';
	}
	else {
      this.y_max = 100 + 25 + 1;
      this.keyboard_display = 'none';
	}
	this.rfb_container_height = window.innerHeight - this.y_max;
  }
  
  onMouseDownX(event) {
    this.rfb_container_visibility = 'hidden';
    this.horizontal_handler_background = 'rgba(0, 0, 0, 0.5)';
    this.horizontal_resize = true;
    this.x_coordinate = event.clientX;
  }
  
  onMouseDownY(event) {
    this.rfb_container_visibility = 'hidden';
    this.vertical_handler_background = 'rgba(0, 0, 0, 0.5)';
    this.vertical_resize = true;
    this.y_coordinate = event.clientY;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
	if (this.vertical_resize) {
      this.vertical_resize = false;
      this.vertical_handler_background = 'black';
	}

	else if (this.horizontal_resize) {
      this.horizontal_resize = false;
      this.horizontal_handler_background = 'black';
	}

    this.rfb_container_visibility = 'visible';
  }
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.vertical_resize && !this.horizontal_resize) {
      return;
    }
	
	if (this.vertical_resize) {
      if ((this.rfb_container_height + (event.clientY - this.y_coordinate)) >= (window.innerHeight - this.y_max)) {
        this.rfb_container_height = window.innerHeight - this.y_max;
        this.y_coordinate = event.clientY;
	  }
	  else if ((this.rfb_container_height + (event.clientY - this.y_coordinate)) < 25) {
        this.rfb_container_height = 25;
        this.y_coordinate = event.clientY;
	  }
	  else {
        this.rfb_container_height += (event.clientY - this.y_coordinate);
        this.y_coordinate = event.clientY;
	  }
	}
	
	else if (this.horizontal_resize) {
      if ((this.rfb_container_width + (event.clientX - this.x_coordinate)) >= (window.innerWidth - this.x_max)) {
	    this.rfb_container_width = window.innerWidth - this.x_max;
        this.x_coordinate = event.clientX;
	  }
	  else if ((this.rfb_container_width + (event.clientX - this.x_coordinate)) < 25) {
        this.rfb_container_width = 25;
        this.x_coordinate = event.clientX;
	  }
	  else {
        this.rfb_container_width += (event.clientX - this.x_coordinate);
        this.x_coordinate = event.clientX;
	  }
	}
  }

  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function(mutation) {
        window.dispatchEvent(new Event('resize'));
      }); 
	});

	var config = { attributes: true, childList: true, characterData: true };

	this.observer.observe(document.getElementById('rfb-container'), config);
	
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event['explicitOriginalTarget'].constructor.name === 'Window') {
	  if ((event.target.innerWidth - this.x_max) < 25) {
        this.rfb_container_width = 25;
	  }
	  else {
        this.rfb_container_width = event.target.innerWidth - this.x_max;
	  }
	  if ((event.target.innerHeight - this.y_max) < 25) {
        this.rfb_container_height = 25;
	  }
	  else {
        this.rfb_container_height = event.target.innerHeight - this.y_max;
	  }
	}
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event) {
    let keyEvent = "KeyboardEvent: key='" + event.key + "' | code='" + event.code + "'";
	console.log(keyEvent);
	if (event.code === 'NumLock') {
	  this.clickedBlqNumKey();
	}
	else if (event.key === 'Shift') {
	  this.clickedShiftKey();
	}
	else if (event.key === 'AltGraph') {
	  this.clickedAltGrKey();
	}
	else if (event.key === 'Control') {
	  this.clickedCtrlKey();
	}
	else if (event.code === 'CapsLock') {
	  this.clickedMayusKey();
	}
	else if (event.key === 'Shift') {
	  this.clickedShiftKey();
	}
	else if (event.key === 'Alt') {
	  this.clickedAltKey();
	}
	else {
  	  if (event.shiftKey) {
		this.shift_key = true;
	  }
	  if (event.altKey) {
		this.alt_key = true;
	  }
	  if (event.ctrlKey) {
		this.ctrl_key = true;
	  }
  	  this.sendKey(event.code);
    }
  }

  ngOnInit() {

	document.body.style.overflow = 'hidden';
	document.body.style.background = 'rgba(40, 40, 40, 0.7)';
	
    this.rfb_container_height = window.innerHeight - this.y_max;
	this.rfb_container_width = window.innerWidth - this.x_max;
	
	return this.http.get('/app01/init').subscribe((data) => {

	  let options = {
	    password: data['secret']
	  };

      this.rfb = new RFB( document.getElementById('rfb-container'), 'wss://' + window.location.hostname + ':5902/', options);
	  this.rfb.addEventListener('connect',  (e) => {
	    console.log('connect', e);
		this.connected = true;
	  });
	  this.rfb.addEventListener('disconnect', (e) => {
	    console.log('disconnect');
		this.connected = false;
	  });
	  this.rfb.addEventListener('credentialsrequired', (e) => {
	    console.log('credentials');
	    this.rfb.sendCredentials(options);
	  });
      this.rfb.addEventListener('desktopname', (e) => {
	    console.log('desktopname');
	  });
      this.rfb.viewOnly = false;
      this.rfb.scaleViewport = true;
      this.rfb.resizeSession = true;
      this.rfb.showDotCursor = true;

	  }, (error: any) => {
	    console.log(error);
	});
  }
  
  ngOnDestroy() {
	document.body.style.overflow = 'unset';
	document.body.style.background = 'white';
	this.observer.disconnect();
	if (this.connected) {
      this.rfb.disconnect();
	}
  }
  
  onExit() {
    this.router.navigate(['/apps']);
  }
}
