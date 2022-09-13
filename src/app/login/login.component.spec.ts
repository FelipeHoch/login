import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a form to complete', () => {
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

  it('should has a button to Login, with text Login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginButton') as HTMLButtonElement;
    expect(compiled.attributes.getNamedItem('type')?.value).toContain('submit');
    expect(compiled.innerText).toContain('Login');
  });

  it('should has a button to Login with Google, with text Login with Google', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginGoogleButton') as HTMLButtonElement;
    expect(compiled.innerText).toContain('Login with Google');
  });

  it('should has a button to Login with Microsoft, with text Login with Microsoft', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('#loginMicrosoftButton') as HTMLButtonElement;
    expect(compiled.innerText).toContain('Login with Microsoft');
  });
});
