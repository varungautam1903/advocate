import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'advocate';

  sections: any[] = [{
    "section": "302",
    "title": "Murder",
    "description": "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine."
  },
  {
    "section": "376",
    "title": "Rape",
    "description": "Whoever commits rape shall be punished with imprisonment of either description for a term which shall not be less than seven years but which may extend to life or for a term extending up to ten years, and shall also be liable to fine."
  },
  {
    "section": "420",
    "title": "Cheating and Dishonestly Inducing Delivery of Property",
    "description": "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both."
  },
  {
    "section": "354",
    "title": "Assault or Criminal Force to Woman with Intent to Outrage Her Modesty",
    "description": "Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
  },
  {
    "section": "120B",
    "title": "Criminal Conspiracy",
    "description": "Whoever is a party to a criminal conspiracy shall be punished with imprisonment of either description for a term not exceeding six months, or with fine, or with both."
  },
  {
    "section": "138",
    "title": "Dishonour of Cheque",
    "description": "Whoever makes a dishonour of a cheque shall be punished with imprisonment for a term which may extend to two years, or with fine which may extend to twice the amount of the cheque, or with both."
  },
  {
    "section": "304A",
    "title": "Causing Death by Negligence",
    "description": "Whoever causes the death of any person by a rash or negligent act not amounting to culpable homicide shall be punished with imprisonment for a term which may extend to two years, or with fine, or with both."
  },
  {
    "section": "377",
    "title": "Unnatural Offences",
    "description": "Whoever voluntarily has carnal intercourse against the order of nature with any man, woman, or animal shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
  },
  {
    "section": "394",
    "title": "Voluntarily Causing Hurt in Committing Robbery",
    "description": "If any person, in committing or in attempting to commit robbery, voluntarily causes hurt to any person, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
  },
  {
    "section": "420",
    "title": "Cheating and Dishonestly Inducing Delivery of Property",
    "description": "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both."
  },
  {
    "section": "499",
    "title": "Defamation",
    "description": "Whoever by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person, is said, except in the cases hereinafter excepted, to defame that person."
  },
  {
    "section": "500",
    "title": "Punishment for Defamation",
    "description": "Whoever defames another shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both."
  },
  {
    "section": "504",
    "title": "Intentional Insult with Intent to Provoke Breach of the Peace",
    "description": "Whoever intentionally insults, and thereby gives provocation to any person, intending or knowing it to be likely that such provocation will cause him to break the public peace, or to commit any other offense, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
  },
  {
    "section": "506",
    "title": "Criminal Intimidation",
    "description": "Whoever commits the offense of criminal intimidation shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
  },
  {
    "section": "511",
    "title": "Punishment for Attempting to Commit Offenses",
    "description": "Whoever attempts to commit an offense punishable by this Code with imprisonment for life or imprisonment, or to cause such an offense to be committed, and in such attempt does any act towards the commission of the offense, shall, where no express provision is made by this Code for the punishment of such attempt, be punished with imprisonment of any description provided for the offense, for a term which may extend to one-half of the longest term of imprisonment provided for that offense, or with such fine as is provided for the offense, or with both."
  },
  {
    "section": "509",
    "title": "Word, Gesture, or Act Intended to Insult the Modesty of a Woman",
    "description": "Whoever, intending to insult the modesty of any woman, utters any word, makes any sound or gesture, or exhibits any object, intending that such word or sound shall be heard, or that such gesture or object shall be seen, by such woman, or intrudes upon the privacy of such woman, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
  },
  {
    "section": "138",
    "title": "Dishonour of Cheque",
    "description": "Whoever makes a dishonour of a cheque shall be punished with imprisonment for a term which may extend to two years, or with fine which may extend to twice the amount of the cheque, or with both."
  },
  {
    "section": "376D",
    "title": "Gang Rape",
    "description": "Where a woman is raped by one or more persons constituting a group or acting in furtherance of a common intention, each of those persons shall be deemed to have committed the offense of rape and shall be punished with rigorous imprisonment for a term which shall not be less than twenty years, but which may extend to life, which shall mean the remainder of that person's natural life, and with fine."
  },
  {
    "section": "279",
    "title": "Rash Driving or Riding on a Public Way",
    "description": "Whoever drives any vehicle, or rides, on any public way in a manner so rash or negligent as to endanger human life or to be likely to cause hurt or injury to any other person shall be punished with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both."
  }]

  isOnline: boolean;
  modalVersion: boolean;
  modalPwaEvent: any;
  modalPwaPlatform: string|undefined;

  constructor(private platform: Platform, private swUpdate: SwUpdate) {
    this.isOnline = false;
    this.modalVersion = false;
  }

  public ngOnInit(): void {
    this.updateOnlineStatus();

    window.addEventListener('online',  this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(
        filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map((evt: any) => {
          console.info(`currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`);
          this.modalVersion = true;
        }),
      );
    }

    this.loadModalPwa();
  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
  }

  public updateVersion(): void {
    this.modalVersion = false;
    window.location.reload();
  }

  public closeVersion(): void {
    this.modalVersion = false;
  }

  private loadModalPwa(): void {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.modalPwaEvent = event;
        this.modalPwaPlatform = 'ANDROID';
      });
    }

    if (this.platform.IOS && this.platform.SAFARI) {
      const isInStandaloneMode = ('standalone' in window.navigator) && ((<any>window.navigator)['standalone']);
      if (!isInStandaloneMode) {
        this.modalPwaPlatform = 'IOS';
      }
    }
  }

  public addToHomeScreen(): void {
    this.modalPwaEvent.prompt();
    this.modalPwaPlatform = undefined;
  }

  public closePwa(): void {
    this.modalPwaPlatform = undefined;
  }
}
