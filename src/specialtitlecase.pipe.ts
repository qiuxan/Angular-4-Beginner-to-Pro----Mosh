import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'specialtitlecase',
})
export class SpecialTitleCasePipe implements PipeTransform {
  transform(inputString: string, args?: any) {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Define a list of words to keep lowercase
    const lowercaseWords = ['of', 'and', 'to'];

    // Loop through the words and apply the rules
    const transformedWords = words.map((word, index) => {
      // Convert "the" to "The" when it's the first word, otherwise keep it lowercase
      if (word.toLowerCase() === 'the') {
        return index === 0 ? 'The' : 'the';
      }

      // Convert "to" to "To", otherwise keep it lowercase
      if (word.toLowerCase() === 'to') {
        return 'To';
      }

      // Keep other words lowercase if they are in the lowercaseWords list
      if (lowercaseWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }

      // Capitalize other words
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the transformed words back into a single string
    const transformedString = transformedWords.join(' ');

    return transformedString;
  }
}
