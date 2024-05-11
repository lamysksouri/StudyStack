import { TestBed } from '@angular/core/testing';

import { MasterChartService } from './master-chart.service';

describe('MasterChartService', () => {
  let service: MasterChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
