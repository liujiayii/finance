import Vue from 'vue'
import VueI18n from 'vue-i18n'

const en_US = {
  header: {
    HeadMenu: {
      lang: 'English',
      center: 'user center',
      settings: 'user settings',
      test: 'test',
      logout: 'logout',
      a: 'Good morning',
      b: 'Good morning',
      c: 'Good noon',
      d: 'Good afternoon',
      e: 'Good evening'
    }
  },
  routerName: {
    Home: 'Home',
    Target: 'Target',
    TargetList: 'TargetList',
    TargetListDetail: 'TargetListDetail',
    TargetDraft: 'TargetDraft',
    TargetReject: 'TargetReject',
    TargetCheck: 'TargetCheck',
    Finance: 'Finance',
    FinanceList: 'FinanceList',
    FinanceReject: 'FinanceReject',
    FinanceCheck: 'FinanceCheck',
    System: 'System',
    Company: 'Company',
    User: 'User',
    Role: 'Role',
    Access: 'Access',
  },
}

const zh_CN = {
  header: {
    HeadMenu: {
      lang: '简体中文',
      center: '用户中心',
      settings: '账户设置',
      test: 'test',
      logout: '退出登录',
      a: '早上好',
      b: '上午好',
      c: '中午好',
      d: '下午好',
      e: '晚上好'
    }
  },
  routerName: {
    Home: '主页',
    Target: '标的管理',
    TargetList: '标的列表',
    TargetListDetail: '标的详情',
    TargetDraft: '草稿箱',
    TargetReject: '被驳回单',
    TargetCheck: '由我审核',
    Finance: '收入支出',
    FinanceList: '收入支出',
    FinanceReject: '驳回单',
    FinanceCheck: '由我审核',
    System: '其他设置',
    Company: '公司管理',
    User: '用户管理',
    Role: '角色管理',
    Access: '权限管理',
  },
}

Vue.use(VueI18n)

const messages = {
  en_US,
  zh_CN
}

// 默认语言
const defaultLanguage = 'zh_CN'

const i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale: defaultLanguage,
  messages
})

export default i18n

// 已经import的语言
const loadedLanguages = [defaultLanguage]

// 使用已经缓存的语言设置
if (defaultLanguage !== localStorage.lang) {
  loadLanguageAsync(localStorage.lang)
}

function setI18nLanguage(lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang = defaultLanguage) {
  return new Promise(resolve => {
    // 缓存语言设置
    localStorage.lang = lang
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return messages[lang].then(msg => {
          i18n.setLocaleMessage(lang, msg.default)
          loadedLanguages.push(lang)
          return setI18nLanguage(lang)
        })
      }
      return resolve(setI18nLanguage(lang))
    }
    return resolve(lang)
  })
}
