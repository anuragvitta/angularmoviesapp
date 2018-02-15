import { TestBed, inject , async} from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
describe('MovieService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
        ],
        providers: [MovieService, HttpClient]
      });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
  it('should return json array', async(inject([MovieService], (service: MovieService) => {
    service.getMovies().subscribe(result => {
      expect(result[0].id).toEqual(1);
     });
  })));
  it('should return json array', async(inject([MovieService], (service: MovieService) => {
    service.getMovie({id: 1}).subscribe(result => {
      expect(result[0].id).toEqual(1);
     });
  })));
});
