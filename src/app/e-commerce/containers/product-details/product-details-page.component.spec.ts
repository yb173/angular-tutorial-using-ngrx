import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsPageComponent } from './product-details-page.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        ProductDetailsPageComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapShot: {paramMap: convertToParamMap({ productId: 1 })}
          }
        },
        CartService,
        ProductService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // FIXME: subscribe がないと怒られる v9 で治ってるかな？
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
