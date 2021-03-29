import { Effect, Reducer, Subscription } from 'umi';


export type BtnListItem = {
  type: string,
  disabled: Boolean,
  title: string
}

export interface GlobalModelState {
  btnList: Array<BtnListItem>;
}

export interface GlobalModelType {
  namespace: 'toolbar';
  state: GlobalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    updata: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const toolbarModel: GlobalModelType = {
  namespace: 'toolbar',

  state: {
    btnList: [
      {
        type: '',
        disabled: false,
        title: '预览',
      },
      {
        type: '',
        disabled: false,
        title: '保存',
      },
      {
        type: '',
        disabled: false,
        title: '清除画布',
      },
    ],
  },

  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    updata(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // do something
      });
    }
  }
};

export default toolbarModel;
