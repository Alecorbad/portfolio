/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */


export class EnumObj {
  public Id?: number;
  public Name?: string;

  constructor(init?: Partial<EnumObj>) {
    Object.assign(this, init);
  }
}

export class AppModal {
  public modalName = '';
  public modalData: any = null;

  constructor(modalName: string, modalData: any) {
    this.modalName = modalName;
    this.modalData = modalData;
  }
}

export class Constants {
  public static readonly PROFILE_SELECT_MODAL = 'profile-select-modal';
  public static readonly ERROR_DEFAULT = -1;
  public static readonly ERROR_DEFAULT_MESSAGE = "Si è verificato un errore nell'operazione";
  public static readonly PAGE_SIZE = 20;
  public static readonly SHORT_PAGE_SIZE = 10;
}

export class BasicItem {
    public id;
    public description;
    public code?: string;

    constructor(id?: number, description?: string, code?: string) {
      this.id = id ?? 0;
      this.description = description ?? '';
      this.code = code;
    }
}

export interface Option<T> extends BasicItem{
  value: T,
  color?: string;
}


enum ColumnTableType{
  Logo =                 "logo",
  Checkbox =             "checkbox",
  Date =                 "date",
  Hour =                 "hour",
  Text =                 "text",
  LongDescription =      "lDescription",
  Rating =               "rating",
}

export interface TableColumnInfo {
  field: string,
  header: string,
  sortable?: boolean,
  type?: ColumnTableType,
  isVisible?: boolean,
  width? : string,
  filter? : boolean,
  title? : string,
  isClickable? : boolean
}


