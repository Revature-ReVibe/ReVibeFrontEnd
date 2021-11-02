import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
           provide: Router,
           useValue: {
              url: '/'
           }
        },{
          provide:FormBuilder
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('User should be able to log in', () => {
    const router = TestBed.inject(Router);
    component.loginForm.controls['username'].setValue("firstUser");
    component.loginForm.controls['password'].setValue("root");
    component.login();
    expect(router.url).toBe('/');
  });



});
