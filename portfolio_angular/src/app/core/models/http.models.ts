import {BasicItem, Constants} from "./shared.models";

export class Response {
  public code = 0;
  public message: string | null = null;
}

export class DataResponse<T> extends Response {
  public item: T | null = null;
  public items: T[] | null = null;

  public static error<T>(code?: number){
    const r = new DataResponse<T>();
    r.code = code ?? Constants.ERROR_DEFAULT;
    return r;
  }
}

export class JobPostsFacetResponse<T> extends Response{
  public companies: BasicItem[] | null = null;
  public provinces: BasicItem[] | null = null;
  public totalCount?: number;

  public static error<T>(code?: number){
    const r = new JobPostsFacetResponse<T>();
    r.code = code ?? Constants.ERROR_DEFAULT;
    return r;
  }
}

export class ListDataResponse<T> extends DataResponse<T> {
  public totalCount: number | null = null;

  public static override error<T>(code?: number){
    const r = new ListDataResponse<T>();
    r.code = code ?? Constants.ERROR_DEFAULT;
    return r;
  }
}

export class Errors {
  public static readonly NotFound = 404;

  /// <summary>L'utente e' gia' candidato all'annuncio</summary>
  public static readonly UserAlreadyApplied = 1001;

  /// <summary> L'utente ha effettuato il login social ma non è ancora registrato sulla piattaforma </summary>
  public static readonly UserSocialRegistrationToComplete = 10001;

  /// <summary> L'utente non ha confermato la mail di registrazione </summary>
  public static readonly UserEmailNotConfirmed = 10002;

  /// <summary> Dati personali inseriti non validi </summary>
  public static readonly InvalidProfilePersonaData = 20001;

  /// <summary> Dati sull'esperienza di lavoro inseriti non validi </summary>
  public static readonly InvalidProfileJobExperience = 20002;

  /// <summary> Dati sul titolo di studio non validi </summary>
  public static readonly InvalidProfileStudies = 20003;

  /// <summary> Limiti delle valutazioni infranti (max 1 voto 10, 3 voti 9, ...)</summary>
  public static readonly ValuationsLimitsBreak = 30001;
  public static readonly InvalidOperationCode = 30002;

  public static readonly EmailInvaildRequest = -90000;
  public static readonly EmailInvaildDestinationAddress = -90001;
  public static readonly EmailInvaildSourceAddress = -90002;
}

