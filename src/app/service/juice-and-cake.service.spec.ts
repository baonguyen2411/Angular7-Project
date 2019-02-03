import { TestBed } from '@angular/core/testing';

import { JuiceAndCakeService } from './juice-and-cake.service';

describe('JuiceAndCakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuiceAndCakeService = TestBed.get(JuiceAndCakeService);
    expect(service).toBeTruthy();
  });
});
