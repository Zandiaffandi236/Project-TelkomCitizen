/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { Dimensions, Platform, PixelRatio } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../styles';
import { scale } from '../utils/scaling';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const screenShape = y / x < 1.5 ? 'square' : 'rectangle';
const iosDevice = x > 736 ? 'ipad' : 'iphone';

const ratioX =
  Platform.OS === 'ios'
    ? x <= 375
      ? x <= 320
        ? 0.6
        : 0.75
      : x > 414
        ? 1.2
        : 1
    : x <= 375
      ? x <= 320
        ? 0.5
        : 0.65
      : x > 414
        ? 1.1
        : 0.9;
const ratioY =
  Platform.OS === 'ios'
    ? y <= 568
      ? y <= 480
        ? 0.6
        : 0.75
      : y > 736
        ? 1.2
        : 1
    : y <= 568
      ? y <= 480
        ? 0.5
        : 0.65
      : y > 736
        ? 1.1
        : 0.9;

const metrics = {
  platform: Platform.OS,
  statusBar: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    height: 21
  },
  pixelRatio: Platform.OS === 'ios' ? (x > 375 && x < 703 ? 2 : PixelRatio.get()) : PixelRatio.get() * 0.6,
  screenShape,
  iosDevice,
  marginHorizontal: scale(10),
  marginVertical: scale(10),
  marginHide: scale(265),
  topHide: scale(10),
  fPass: scale(250),
  section: scale(25),
  baseMargin: scale(10),
  option: scale(27),
  option2: scale(35),
  doubleBaseMargin: scale(20),
  doubleBaseMargin2: scale(40),
  inputMargin: scale(30),
  doubleInputMargin: scale(60),
  smallMargin: scale(5),
  tripleSmallMargin: scale(15),
  negTripleSmallMargin: scale(-15),
  doubleSection: scale(50),
  extraSection: scale(45),
  extraSection2: scale(90),
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  //   screenWidth: x < y ? x : y,
  //   screenHeight: x < y ? y : x,
  screenWidth: x,
  screenHeight: y,
  ratioX,
  ratioY,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54
};

export default metrics;
