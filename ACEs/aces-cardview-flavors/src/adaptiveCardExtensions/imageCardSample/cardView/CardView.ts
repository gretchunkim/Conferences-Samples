import {
  BaseImageCardView,
  IImageCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'ImageCardSampleAdaptiveCardExtensionStrings';
import { IImageCardSampleAdaptiveCardExtensionProps, IImageCardSampleAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../ImageCardSampleAdaptiveCardExtension';

export class CardView extends BaseImageCardView<IImageCardSampleAdaptiveCardExtensionProps, IImageCardSampleAdaptiveCardExtensionState> {

  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      },
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IImageCardParameters {
    return {
      primaryText: strings.PrimaryText,
      // imageUrl: 'https://blogs.microsoft.com/uploads/2017/09/WR-Microsoft-logo.jpg'
      imageUrl: require('../assets/SharePointLogo.svg')
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'ExternalLink',
      parameters: {
        target: 'https://www.bing.com'
      }
    };
  }
}
