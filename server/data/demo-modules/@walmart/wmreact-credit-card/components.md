#  (@walmart/wmreact-credit-card)

Credit card components


## CreditCards

A component listing credit cards.

 Here is a simple example:

 ```jsx
 <CreditCards cards = {[{
    lastFour:"1111",
    firstName:"John",
    lastName:"Snow",
    cardExpiryDate:"2020-07-15",
    cardType:"AMEX",
    id:"1",
    addressLineOne: "860 w california ave",
    city: "sunnyvale",
    state: "CA",
    postalCode: "94086",
    phone: "8123823828"
  }]} onAdd={(card) => {}} onEdit={({id,card}) => {}} onDelete={({id}) => {}} />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *cards* | arrayOf | contains all cards you wish to show | `[]`
| *onAdd* | func | when set, will enable adding new cards by showing the add-new tile | 
| *onEdit* | func | when set, will enable the edit of the cards | 
| *onDelete* | func | when set, will enable the delete button on the cards | 
| *onRequestEdit* | func | required when either add or edit is to be used | 
| *onDeleteModeChange* | func |  | 
| *cardInDeleteMode* | string |  | 
| *cardEdited* | string | use in combination with onRequestEdit | 
| *errors* | object | errors in the form of {cardId: {error_name: "details"}} | `{}`
| *onRequestClearErrors* | func | clear errors by id, onRequestClearErrors(cardId) | 
| *onValidationChange* | func |  | 
| *cardNumberEditable* | bool |  | 
| *loading* | bool |  | 
| *fetchInitialData* | bool |  | 
| *renderHeader* | func |  | 
| *adding* | bool |  | 
| *initSpinner* | node |  | 
| *validationDate* | object |  | 
| *truncate* | bool |  | `false`
| *onShowAllCards* | func |  | 
| *defaults* | object |  | `{}`
| *bypassAvs* | bool |  | `false`
| *tile* | node |  | 
| *addTile* | node |  | 
| *addressForm* | func |  | 
| *fullWidth* | bool |  | 
| *tealeafIds* | shape |  | `{}`
| *formActions* | func |  | 
| *usePrimaryButtons* | bool |  | `true`
| *showExpiredLabel* | bool |  | 
| *floatingLabels* | bool |  | 

### import

```jsx
import {CreditCards} from "@walmart/wmreact-credit-card";
```

<hr/>

## CreditCards

A component for displaying a single credit card.

 Here is a simple example:

 ```jsx
 <CreditCard
 onDelete={(ev) => console.log(ev)}
 onEdit={(ev) => console.log(ev)}
 cardType="VISA"
 lastFour="1111"
 firstName="John"
 lastName="Snow"
 cardExpiryDate="07/17"
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *index* | number |  | 
| *cardType* | enum |  | 
| *isTemp* | bool |  | 
| *cardExpiryDate* | string |  | 
| *lastFour* | string |  | 
| *firstName* | string |  | 
| *lastName* | string |  | 
| *onDeleteModeChanged* | func |  | 
| *onDelete* | func | when set, the delete action will be enabled | 
| *onEdit* | func | when set, the edit action will be enabled | 
| *loading* | bool |  | 
| *deleting* | bool |  | 
| *deleteMode* | bool |  | `false`
| *tealeafIds* | shape |  | `{ edit: "edit", delete: "delete", deleteConfirmDel...`
| *showExpiredLabel* | bool |  | 

### import

```jsx
import {CreditCards} from "@walmart/wmreact-credit-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *cardNumberEditable* | bool |  | 
| *index* | number |  | 
| *isNew* | bool |  | 
| *isInitial* | bool |  | 
| *isEditorActive* | bool |  | 
| *inEditMode* | bool |  | 
| *avsError* | object |  | 
| *onRequestClearErrors* | func |  | 
| *onSave* | func |  | 
| *onValidationChange* | func |  | 
| *onCancel* | func |  | 
| *actions* | func |  | 
| *primary* | bool |  | `true`
| *postalCode* | string |  | 
| *addressLineOne* | string |  | 
| *addressLineTwo* | string |  | 
| *state* | string |  | 
| *id* | string |  | 
| *city* | string |  | 
| *firstName* | string |  | 
| *lastName* | string |  | 
| *cardExpiryDate* | string |  | 
| *validationDate* | object |  | 
| *lastFour* | string |  | 
| *cardType* | string |  | 
| *isTemp* | bool |  | 
| *phone* | string |  | 
| *loading* | bool |  | 
| *addressForm* | func |  | 
| *floatingLabels* | bool |  | 
| *bypassValidation* | bool |  | 
| *tealeafIds* | shape |  | `{ save: "save", cancel: "cancel" }`
| *errors* | shape |  | 

### import

```jsx
import  from "@walmart/wmreact-credit-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *errorCodes* | arrayOf |  | 
| *errorMessages* | object |  | 

### import

```jsx
import  from "@walmart/wmreact-credit-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *actions* | object |  | 
| *onContinue* | func |  | 
| *address* | object |  | 
| *embedded* | bool |  | 
| *loading* | bool |  | 
| *primary* | bool |  | 
| *alert* | object |  | 
| *invalidAddressError* | object |  | 

### import

```jsx
import  from "@walmart/wmreact-credit-card";
```

<hr/>
