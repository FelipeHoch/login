import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a form to fill', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('form');
    expect(compiled).not.toBeNull();
  });

  it('should has a field to fill w/ email', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    expect(compiled.attributes.getNamedItem('type')?.value).toContain('email');
  });

  it('should has a field to fill w/ password', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#password') as HTMLInputElement;
    expect(compiled.attributes.getNamedItem('type')?.value).toContain('password');
  });

  it('should has an anchor text written -- Esqueceu sua senha? --', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#forgotPassword') as HTMLAnchorElement;
    expect(compiled.innerText).toContain('Esqueceu sua senha?');
  });

  it('should has a button to Login, w/ Login text', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginButton') as HTMLButtonElement;
    expect(compiled.attributes.getNamedItem('type')?.value).toContain('submit');
    expect(compiled.innerText).toContain('Login');
  });

  it('should has a button to Login with Google', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginGoogleButton') as HTMLButtonElement;
    expect(compiled).not.toBeNull();
  });

  it('should has a button to Login with Microsoft', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginMicrosoftButton') as HTMLButtonElement;
    expect(compiled).not.toBeNull();
  });

  it('should initialize form with empty values', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      email: '',
      password: ''
    };

    expect(loginFormGroup.value).toEqual(loginFormValues);
  })

  it('should fail when submit form before user enter with value', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      email: '',
      password: ''
    };

    expect(loginFormGroup.value).toEqual(loginFormValues);
    expect(loginFormGroup.get('email')?.errors).not.toBeNull();
    expect(loginFormGroup.get('password')?.errors).not.toBeNull();
  })

  it('should fail when email isnt in correct format', () => {
    const loginFormGroup = component.loginForm;
  
    loginFormGroup.get('email')?.setValue('hochfelipegmail.com');

    expect(loginFormGroup.get('email')?.errors).not.toBeNull();
  })

  it('should fail when password has less than 6 of length', () => {
    const loginFormGroup = component.loginForm;
  
    loginFormGroup.get('password')?.setValue('01234');

    expect(loginFormGroup.get('password')?.errors).not.toBeNull();
  })

  it('should be valid form after correct values', () => {
    const loginFormGroup = component.loginForm;
  
    loginFormGroup.get('email')?.setValue('hochfelipe@gmail.com');
    loginFormGroup.get('password')?.setValue('012345');

    expect(loginFormGroup.valid).toBeTrue();
  })
});
