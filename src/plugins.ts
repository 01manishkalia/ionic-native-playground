import _ from 'lodash';
import { CameraPage } from './pages/camera/camera';
import { ActionSheetPage } from './pages/action-sheet/action-sheet';
import { BarcodeScannerPage } from './pages/barcode-scanner/barcode-scanner';
import { BrightnessPage } from './pages/brightness/brightness';
import { ContactsPage } from './pages/contacts/contacts';
import { GoogleMapsPage } from './pages/google-maps/google-maps';

import { AppAvailability } from '@ionic-native/app-availability';
import { DynamicPluginPage } from './pages/dynamic-plugin/dyanmic-plugin';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Badge } from '@ionic-native/badge';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Calendar } from '@ionic-native/calendar';
import { CallNumber } from '@ionic-native/call-number';
import { DatePicker } from '@ionic-native/date-picker';
import { AppRate } from '@ionic-native/app-rate';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Device } from '@ionic-native/device';
import { BatteryStatus } from '@ionic-native/battery-status';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { AdMob } from '@ionic-native/admob';
import { AppVersion } from '@ionic-native/app-version';
import { DBMeter } from '@ionic-native/db-meter';
import { DeviceMotion } from '@ionic-native/device-motion';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { Dialogs } from '@ionic-native/dialogs';
import { FileChooser } from '@ionic-native/file-chooser';
import { Flashlight } from '@ionic-native/flashlight';
import { Globalization } from '@ionic-native/globalization';
import { Gyroscope } from '@ionic-native/gyroscope';
import { SMS } from '@ionic-native/sms';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceAccounts } from '@ionic-native/device-accounts';
import { Clipboard } from '@ionic-native/clipboard';
import { Market } from '@ionic-native/market';
import { Keyboard } from '@ionic-native/keyboard';
import { GooglePlus } from '@ionic-native/google-plus';
import { CardIO } from '@ionic-native/card-io';
import { Stripe } from "@ionic-native/stripe";
import { OneSignal } from '@ionic-native/onesignal';
import {PinDialog} from "@ionic-native/pin-dialog";
import {PowerManagement} from "@ionic-native/power-management";
import {SafariViewController} from "@ionic-native/safari-view-controller";
import {Screenshot} from "@ionic-native/screenshot";
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {SecureStorage} from "@ionic-native/secure-storage";
import {StatusBar} from "@ionic-native/status-bar";
import {Stepcounter} from "@ionic-native/stepcounter";
import {StreamingMedia} from "@ionic-native/streaming-media";
import {Toast} from "@ionic-native/toast";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Sim} from "@ionic-native/sim";
import {TouchID} from "@ionic-native/touch-id";
import {UniqueDeviceID} from "@ionic-native/unique-device-id";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {Network} from "@ionic-native/network";
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {GoogleAnalytics} from "@ionic-native/google-analytics";
import {Pedometer} from "@ionic-native/pedometer";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {HTTP} from "@ionic-native/http";
import {DeviceFeedback} from "@ionic-native/device-feedback";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CameraPreviewPage} from "./pages/camera-preview/camera-preview";
import {MediaPage} from "./pages/media/media";

class Plugin {
  constructor(
    public name: string,
    public component: any
  ) {}
}

class DynamicPlugin {

  params: any;
  name: string;
  component: any = DynamicPluginPage;

  constructor(provider: any) {
    this.name = provider.getPluginName();
    this.params = {
      sig: provider.getPluginName().replace(/\s/g, ''),
      name: provider.getPluginName(),
      provider
    };
  }

}


const plugins = [
  new Plugin('Action Sheet', ActionSheetPage),
  new Plugin('Barcode Scanner', BarcodeScannerPage),
  new Plugin('Brightness', BrightnessPage),
  new Plugin('Camera', CameraPage),
  new Plugin('Contacts', ContactsPage),
  new Plugin('Google Maps', GoogleMapsPage),
  new Plugin('CameraPreview', CameraPreviewPage),
  new Plugin('Media', MediaPage),

  new DynamicPlugin(BatteryStatus),
  new DynamicPlugin(CardIO),
  new DynamicPlugin(Clipboard),
  new DynamicPlugin(Device),
  new DynamicPlugin(DeviceAccounts),
  new DynamicPlugin(Market),
  new DynamicPlugin(Keyboard),
  new DynamicPlugin(GooglePlus),
  new DynamicPlugin(Geolocation),
  new DynamicPlugin(Diagnostic),
  new DynamicPlugin(AndroidFingerprintAuth),
  new DynamicPlugin(AppRate),
  new DynamicPlugin(Badge),
  new DynamicPlugin(AppAvailability),
  new DynamicPlugin(BrowserTab),
  new DynamicPlugin(Calendar),
  new DynamicPlugin(CallNumber),
  new DynamicPlugin(DatePicker),
  new DynamicPlugin(AppPreferences),
  new DynamicPlugin(AdMob),
  new DynamicPlugin(BackgroundGeolocation),
  new DynamicPlugin(AppVersion),
  new DynamicPlugin(DBMeter),
  new DynamicPlugin(DeviceMotion),
  new DynamicPlugin(DeviceOrientation),
  new DynamicPlugin(Dialogs),
  new DynamicPlugin(FileChooser),
  new DynamicPlugin(Flashlight),
  new DynamicPlugin(Globalization),
  new DynamicPlugin(Gyroscope),
  new DynamicPlugin(SMS),
  new DynamicPlugin(TextToSpeech),
  new DynamicPlugin(Vibration),
  new DynamicPlugin(SpeechRecognition),
  new DynamicPlugin(Stripe),
  new DynamicPlugin(OneSignal),
  new DynamicPlugin(PinDialog),
  new DynamicPlugin(PowerManagement),
  new DynamicPlugin(SafariViewController),
  new DynamicPlugin(ScreenOrientation),
  new DynamicPlugin(Screenshot),
  new DynamicPlugin(SecureStorage),
  new DynamicPlugin(Sim),
  new DynamicPlugin(SocialSharing),
  new DynamicPlugin(StatusBar),
  new DynamicPlugin(Stepcounter),
  new DynamicPlugin(StreamingMedia),
  new DynamicPlugin(Toast),
  new DynamicPlugin(TouchID),
  new DynamicPlugin(UniqueDeviceID),
  new DynamicPlugin(YoutubeVideoPlayer),
  new DynamicPlugin(NativeGeocoder),
  new DynamicPlugin(Pedometer),
  new DynamicPlugin(Network),
  new DynamicPlugin(NativePageTransitions),
  new DynamicPlugin(InAppBrowser),
  new DynamicPlugin(HTTP),
  new DynamicPlugin(GoogleAnalytics),
  new DynamicPlugin(DeviceFeedback),
];

export default _.sortBy(plugins, ['name']);

