# _Pig Latin Translator (igPay atinLay anslatorTray)_

#### _This program translates English into Pig Latin, 06.07.2017_

#### By _**Esvethlynna Pangelinan and Alena Golovina**_

## Description

This program translates English into Pig Latin using the following rules:

* For words beginning with a vowel, add "way" to the end.

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

* For words beginning with "y", treat "y" as a consonant.

## Specifications

* **Non-alphabetical characters - the program does nothing to since they do not contain consonants or vowels.**
_Input Example:_ 3
_Output Example:_ 3

* **Single-letter words beginning with a vowel - adds "way" to the end of the word.**
_Input Example:_ i
_Output Example:_ iway

* **Single-letter words beginning with a vowel regardless of the case - adds "way" to the end of the word.**
_Input Example:_ I
_Output Example:_ Iway

* **Multiple-letter words beginning with a vowel - adds "way" to the end of the word.**
_Input Example:_ an
_Output Example:_ anway


* **Single-letter words beginning with a consonant - adds "ay" to the end of the word.**
_Input Example:_ p
_Output Example:_ pay

* **Multiple-letter words beginning with a consonant - moves the consonant to the end and adds "ay" to the end.**
_Input Example:_ pay
_Output Example:_ aypay

* **Multiple-letter words beginning with two or more consonants - moves all consecutive consonants to the end and adds "ay" to the end.**
_Input Example:_ play
_Output Example:_ ayplay

* **Words beginning with "qu" - moves "qu" to the end and adds "ay" to the end.**
_Input Example:_ queue
_Output Example:_ euequay

* **Words beginning with consonant and "qu" - moves all consecutive consonants and "qu" to the end and adds "ay" to the end.**
_Input Example:_ squeal
_Output Example:_ ealsquay

* **Words beginning with "y" - moves "y" to the end and adds "ay" to the end.**
_Input Example:_ yes
_Output Example:_ esyay




a word that only has one consonant; then a word with two consonants; then a word with three; and then tackle the exceptions to the rule, like "qu" and "y". Once your application can successfully translate single words, work on translating entire sentences.

## Setup/Installation Requirements

_Open the index.html in the browser._

## Known Bugs

_No bugs._

## Support and contact details

_If you have any questions please contact us at alenasgolivna@gmail.com or esveth@aol.com_

## Technologies Used

* HTML
* CSS
* JavaScript

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Alena Golovina and Esvethlynna Pangelinan_**
