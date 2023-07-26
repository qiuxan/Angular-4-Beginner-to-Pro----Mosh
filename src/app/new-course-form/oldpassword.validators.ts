import { AbstractControl, ValidationErrors } from '@angular/forms';

export class OlderPassworChecker {
  static differentToNewPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    if (
      (control?.parent?.get('newPassword')?.value as string) !=
      (control.value as string)
    )
      return { differentToNewPassword: true };
    return null;
  }
  static oldPassworNotCorrect(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value != '123') {
          resolve({ oldPassworNotCorrect: true });
        } else resolve(null);
      }, 2000);
    });
  }
}
