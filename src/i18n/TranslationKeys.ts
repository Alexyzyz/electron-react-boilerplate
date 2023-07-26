type TranslationKeyGeneric =
  | 'Scene'
  | 'Edit'
  | 'View'
  | 'Submission'
  | 'Settings'
  | 'Help';

type TranslationKeyAssetTypes = '3DAssets' | 'Sky' | 'BGM' | 'Interaction';

type TranslationKeyLoadingModal = 'ModalLoading_Title' | 'ModalLoading_Content';

export type TranslationKey =
  | TranslationKeyGeneric
  | TranslationKeyAssetTypes
  | TranslationKeyLoadingModal;
