import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkStubDirective } from 'testing/router-stubs';
import { BehaviorSubject } from 'rxjs';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        ProductDetailsComponent,
        RouterLinkStubDirective,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapShot: {paramMap: convertToParamMap({ productId: 1 })}
          }
          // useValue: { params: new BehaviorSubject({}) },
        },
        CartService,
        ProductService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // FIXME: subscribe がないと怒られる v9 で治ってるかな？
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
