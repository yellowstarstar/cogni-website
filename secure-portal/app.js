const KEYS = {
  pendingVerify: 'portal_pending_verify_users_v2',
  pendingReview: 'portal_pending_review_users_v2',
  approved: 'portal_approved_users_v2',
  mPendingVerify: 'portal_m_pending_verify_users_v1',
  mPendingReview: 'portal_m_pending_review_users_v1',
  mApproved: 'portal_m_approved_users_v1',
  session: 'portal_session_user_v1',
  mSession: 'portal_m_session_user_v1',
  adminRoles: 'portal_admin_roles_v1',
  rewardsWallet: 'portal_rewards_wallet_v1',
  referrals: 'portal_referral_leads_v1',
  orders: 'portal_service_orders_v1',
  serviceCatalog: 'portal_service_catalog_v1'
};

const CONTACT_EMAIL = 'ITsupport@cogniplatforms.com';
const B2C_PORTAL = 'https://cogni-coding.com';
const REG_NOTIFY_API = '/api/send-registration-notice';
const VERIFY_CODE_API = '/api/send-verification-code';
const ACCESS_NOTIFY_API = '/api/send-access-link';
const INQUIRY_API = '/api/send-inquiry';
const POINTS_ACTION_API = '/api/send-points-action';

const REGISTRATION_APPROVAL_POINTS = 500;
const REFERRAL_REWARD_POINTS = 200;
const REWARD_CATALOG = {
  'consult-30': { name: '30 分鐘流程問答', cost: 120 },
  'consult-45': { name: '45 分鐘系統定位', cost: 180 },
  'consult-60': { name: '60 分鐘專項顧問', cost: 260 }
};

const DEFAULT_SERVICE_CATALOG = {
  consultation: { name: '諮詢', cost: 120 }
};

const SUPERUSER_EMAILS = ['superuser@cogniplatform.com'];

const SEARCHABLE_OPTIONS = {
  system: ['SAP', 'ORACLE', 'IFS', 'Infor', 'Microsoft Dynamics 365', '其他'],
  sapModule: [
    'Record-to-Report / Finance & Management Accounting',
    'Recruit-to-Retire / Human Experience Management',
    'Source-to-Pay / Procurement',
    'Design-to-Operate / Production',
    'Lead-to-Cash / Sales',
    'Lead-to-Cash / Service',
    'Project Systems / Enterprise Projects',
    'Asset Management / Maintenance',
    'Inventory & Warehouse Management',
    'Analytics / Reporting',
    'FI - Financial Accounting',
    'CO - Controlling',
    'MM - Materials Management',
    'SD - Sales and Distribution',
    'PP - Production Planning',
    'PM - Plant Maintenance',
    'QM - Quality Management',
    'WM / EWM - Warehouse Management',
    'PS - Project Systems',
    'HCM / SuccessFactors - Human Capital Management',
    'Ariba - Procurement Collaboration',
    'BW/4HANA - Analytics and Data Warehousing',
    '其他'
  ],
  packageName: [
    'ERP Process Automation Pack',
    'Integration Acceleration Pack',
    'Compliance Reporting Enhancement Pack',
    'AI Copilot Enablement Pack',
    '其他'
  ],
  targetSystem: [
    'SAP S/4HANA',
    'SAP ECC 6.0',
    'SAP BW/4HANA',
    'SAP Business One',
    'Oracle E-Business Suite',
    'Oracle Fusion Cloud ERP',
    'Oracle JD Edwards',
    'Oracle NetSuite',
    'Oracle PeopleSoft',
    'IFS Cloud',
    'IFS Applications',
    'Infor M3',
    'Infor LN',
    'Infor CloudSuite',
    'Microsoft Dynamics 365',
    '其他'
  ]
};

const SYSTEM_PRODUCT_OPTIONS = {
  SAP: [
    'SAP S/4HANA',
    'SAP ECC 6.0',
    'SAP Business One',
    'SAP Business ByDesign',
    'SAP BW/4HANA',
    'SAP SuccessFactors',
    'SAP Ariba',
    'SAP IBP',
    'SAP EWM',
    'SAP TM'
  ],
  ORACLE: [
    'Oracle E-Business Suite',
    'Oracle Fusion Cloud ERP',
    'Oracle JD Edwards',
    'Oracle NetSuite',
    'Oracle PeopleSoft',
    'Oracle SCM Cloud',
    'Oracle HCM Cloud'
  ],
  IFS: ['IFS Cloud', 'IFS Applications', 'IFS FSM'],
  INFOR: ['Infor M3', 'Infor LN', 'Infor CloudSuite', 'Infor SunSystems', 'Infor WMS'],
  'MICROSOFT DYNAMICS 365': [
    'Microsoft Dynamics 365 Finance',
    'Microsoft Dynamics 365 Supply Chain',
    'Microsoft Dynamics 365 Business Central',
    'Microsoft Dynamics 365 Commerce',
    'Microsoft Dynamics 365 Human Resources',
    'Microsoft Dynamics 365 Project Operations',
    'Microsoft Dynamics 365 Sales',
    'Microsoft Dynamics 365 Customer Service',
    'Microsoft Dynamics 365 Field Service',
    'Microsoft Dynamics 365 Customer Insights',
    'Microsoft Dynamics 365 Contact Center',
    'Microsoft Dynamics 365 Intelligent Order Management',
    'Microsoft Dynamics AX'
  ]
};

const SYSTEM_MODULE_OPTIONS = {
  SAP: SEARCHABLE_OPTIONS.sapModule,
  ORACLE: [
    'Financials / General Ledger',
    'Accounts Payable / Accounts Receivable',
    'Procurement / Purchasing',
    'Order Management',
    'Inventory Management',
    'Warehouse Management',
    'Manufacturing',
    'Supply Chain Planning',
    'Project Portfolio Management',
    'Enterprise Performance Management',
    'Human Capital Management',
    'Customer Experience / Sales',
    'Service',
    'Analytics / Reporting',
    'E-Business Suite',
    'Fusion Cloud ERP',
    'JD Edwards EnterpriseOne',
    'NetSuite',
    'PeopleSoft',
    'Source to Pay',
    'Order to Cash',
    'Plan to Produce',
    'Record to Report',
    'Hire to Retire',
    'Project to Profit',
    '其他'
  ],
  IFS: [
    'Finance',
    'Supply Chain',
    'Procurement',
    'Inventory',
    'Manufacturing',
    'Maintenance',
    'Enterprise Asset Management',
    'Field Service Management',
    'Service Management',
    'Projects',
    'Project Delivery',
    'Quality Management',
    'Human Capital Management',
    'Analytics / Reporting',
    'IFS Cloud',
    'IFS Applications',
    'IFS FSM',
    'Source to Pay',
    'Plan to Produce',
    'Maintain to Operate',
    'Project to Delivery',
    'Service to Cash',
    'Record to Report',
    '其他'
  ],
  INFOR: [
    'Financial Management',
    'Supply Chain Management',
    'Procurement',
    'Order Management',
    'Inventory Management',
    'Warehouse Management',
    'Manufacturing',
    'Enterprise Asset Management',
    'Human Capital Management',
    'Product Lifecycle Management',
    'Demand Planning',
    'Quality Management',
    'Analytics / Reporting',
    'Infor M3',
    'Infor LN',
    'Infor CloudSuite',
    'Infor SunSystems',
    'Infor WMS',
    'Source to Pay',
    'Order to Cash',
    'Plan to Produce',
    'Record to Report',
    'Asset to Service',
    '其他'
  ],
  'MICROSOFT DYNAMICS 365': [
    'Finance',
    'Supply Chain Management',
    'Business Central',
    'Commerce',
    'Human Resources',
    'Project Operations',
    'Sales',
    'Customer Service',
    'Field Service',
    'Customer Insights',
    'Customer Voice',
    'Contact Center',
    'Intelligent Order Management',
    'Acquire to Dispose',
    'Case to Resolution',
    'Concept to Market',
    'Design to Retire',
    'Forecast to Plan',
    'Hire to Retire',
    'Inventory to Deliver',
    'Order to Cash',
    'Plan to Produce',
    'Source to Pay',
    'Project to Profit',
    'Prospect to Quote',
    'Record to Report',
    'Service to Deliver',
    'Administer to Operate',
    '其他'
  ]
};

const PRODUCT_MODULE_OPTIONS = {
  'ORACLE E-BUSINESS SUITE': [
    'General Ledger',
    'Accounts Payable',
    'Accounts Receivable',
    'Cash Management',
    'Purchasing',
    'Order Management',
    'Inventory',
    'Warehouse Management',
    'Manufacturing',
    'Project Portfolio Management',
    'Human Capital Management',
    'Service',
    'Discoverer / Reporting',
    'Order to Cash',
    'Source to Pay',
    'Record to Report',
    '其他'
  ],
  'ORACLE FUSION CLOUD ERP': [
    'Financials',
    'Procurement',
    'Risk Management',
    'Enterprise Performance Management',
    'Project Management',
    'Inventory Management',
    'Order Management',
    'Subscription Management',
    'Analytics',
    'Order to Cash',
    'Source to Pay',
    'Record to Report',
    'Project to Profit',
    '其他'
  ],
  'ORACLE JD EDWARDS': [
    'Financial Management',
    'Distribution',
    'Procurement',
    'Manufacturing Management',
    'Warehouse Management',
    'Transportation',
    'Project Management',
    'Asset Lifecycle Management',
    'Human Capital Management',
    'Order to Cash',
    'Source to Pay',
    'Plan to Produce',
    '其他'
  ],
  'ORACLE NETSUITE': [
    'Financial Management',
    'CRM',
    'Order Management',
    'Inventory Management',
    'Warehouse Management',
    'Procurement',
    'Planning and Budgeting',
    'Project Management',
    'Commerce',
    'Analytics',
    'Order to Cash',
    'Record to Report',
    '其他'
  ],
  'ORACLE PEOPLESOFT': [
    'Financials and Supply Chain',
    'Human Capital Management',
    'Campus Solutions',
    'Procurement',
    'Asset Management',
    'Project Costing',
    'Payroll',
    'Reporting and Analytics',
    'Hire to Retire',
    'Source to Pay',
    '其他'
  ],
  'IFS CLOUD': [
    'Finance',
    'Supply Chain',
    'Procurement',
    'Manufacturing',
    'Maintenance',
    'Enterprise Asset Management',
    'Projects',
    'Service Management',
    'Field Service Management',
    'Quality Management',
    'Plan to Produce',
    'Maintain to Operate',
    'Project to Delivery',
    '其他'
  ],
  'IFS APPLICATIONS': [
    'Finance',
    'Distribution',
    'Procurement',
    'Manufacturing',
    'Maintenance',
    'Asset Management',
    'Projects',
    'Service and Maintenance',
    'Human Resources',
    'Business Reporter / Analytics',
    'Source to Pay',
    'Record to Report',
    '其他'
  ],
  'IFS FSM': [
    'Scheduling and Dispatch',
    'Work Order Management',
    'Mobility',
    'Installed Base',
    'Contracts and Warranties',
    'Service Billing',
    'Parts Management',
    'Technician Resource Planning',
    'Service to Cash',
    '其他'
  ],
  'INFOR M3': [
    'Financial Management',
    'Procurement',
    'Sales Order Management',
    'Supply Chain Execution',
    'Production Management',
    'Product Data Management',
    'Warehouse Mobility',
    'Equipment and Rental',
    'Order to Cash',
    'Plan to Produce',
    'Record to Report',
    '其他'
  ],
  'INFOR LN': [
    'Finance',
    'Enterprise Planning',
    'Procurement',
    'Sales',
    'Warehousing',
    'Manufacturing',
    'Service',
    'Project',
    'Quality',
    'Order to Cash',
    'Source to Pay',
    'Project to Delivery',
    '其他'
  ],
  'INFOR CLOUDSUITE': [
    'Financials',
    'Supply Chain',
    'Procurement',
    'Manufacturing',
    'Warehouse Management',
    'Human Capital Management',
    'Enterprise Asset Management',
    'Analytics',
    'Order to Cash',
    'Source to Pay',
    '其他'
  ],
  'INFOR SUNSYSTEMS': [
    'Financials',
    'Corporate Performance Management',
    'Accounts Payable',
    'Accounts Receivable',
    'Ledger Accounting',
    'Reporting',
    'Record to Report',
    '其他'
  ],
  'INFOR WMS': [
    'Inbound',
    'Outbound',
    'Inventory Control',
    'Labor Management',
    'Wave Planning',
    'Yard Management',
    'Warehouse Execution',
    'Inventory to Deliver',
    '其他'
  ],
  'MICROSOFT DYNAMICS 365 FINANCE': [
    'General Ledger',
    'Accounts Payable',
    'Accounts Receivable',
    'Cash and Bank Management',
    'Budgeting',
    'Fixed Assets',
    'Cost Accounting',
    'Tax',
    'Record to Report',
    '其他'
  ],
  'MICROSOFT DYNAMICS 365 SUPPLY CHAIN': [
    'Procurement and Sourcing',
    'Inventory Management',
    'Warehouse Management',
    'Transportation Management',
    'Master Planning',
    'Production Control',
    'Asset Management',
    'Quality Management',
    'Source to Pay',
    'Plan to Produce',
    'Inventory to Deliver',
    '其他'
  ],
  'MICROSOFT DYNAMICS 365 BUSINESS CENTRAL': [
    'Finance',
    'Sales',
    'Purchasing',
    'Inventory',
    'Warehouse',
    'Jobs',
    'Manufacturing',
    'Service Management',
    'Order to Cash',
    'Source to Pay',
    'Record to Report',
    '其他'
  ]
};

const SYSTEM_ALIASES = {
  'MICROSOFT DYNAMICS': 'MICROSOFT DYNAMICS 365',
  'MICROSOFT DYNAMIC 365': 'MICROSOFT DYNAMICS 365',
  'DYNAMICS 365': 'MICROSOFT DYNAMICS 365'
};

const PRODUCT_ALIASES = {
  'JD EDWARDS': 'ORACLE JD EDWARDS',
  'JDE': 'ORACLE JD EDWARDS',
  'D365 FINANCE': 'MICROSOFT DYNAMICS 365 FINANCE',
  'D365 SUPPLY CHAIN': 'MICROSOFT DYNAMICS 365 SUPPLY CHAIN',
  'D365 BUSINESS CENTRAL': 'MICROSOFT DYNAMICS 365 BUSINESS CENTRAL'
};

const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'yahoo.com',
  'yahoo.com.hk',
  'icloud.com',
  'me.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'qq.com',
  '163.com',
  '126.com'
]);

function loadList(key) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function getEmailDomain(email) {
  const parts = String(email || '').split('@');
  if (parts.length !== 2) {
    return '';
  }
  return parts[1].toLowerCase();
}

function isCorporateEmail(email) {
  const domain = getEmailDomain(email);
  return Boolean(domain) && !PERSONAL_EMAIL_DOMAINS.has(domain);
}

async function sendRegistrationNotification(user) {
  const response = await fetch(REG_NOTIFY_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      registrationType: user.registrationType || 'to-b',
      fullName: user.fullName,
      jobTitle: user.jobTitle,
      company: user.company,
      officePhone: user.officePhone,
      mobilePhone: user.mobilePhone,
      email: user.email,
      region: user.region,
      cooperationFocus: user.cooperationFocus || '',
      submittedAt: user.submittedAt
    })
  });

  const result = await response.json().catch(() => ({ ok: false, error: 'Invalid API response' }));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || 'Failed to send registration notification');
  }
}

async function sendVerificationCodeEmail(user) {
  const response = await fetch(VERIFY_CODE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      registrationType: user.registrationType || 'to-b',
      fullName: user.fullName,
      company: user.company,
      email: user.email,
      verifyCode: user.verifyCode
    })
  });

  const result = await response.json().catch(() => ({ ok: false, error: 'Invalid API response' }));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || 'Failed to send verification email');
  }
}

async function sendAccessNotification(user) {
  const response = await fetch(ACCESS_NOTIFY_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      registrationType: user.registrationType || 'to-b',
      fullName: user.fullName,
      company: user.company,
      email: user.email
    })
  });

  const result = await response.json().catch(() => ({ ok: false, error: 'Invalid API response' }));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || 'Failed to send access link email');
  }
}

async function sendInquiry(payload) {
  const response = await fetch(INQUIRY_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({ ok: false, error: 'Invalid API response' }));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || 'Failed to send inquiry');
  }
}

async function sendPointsAction(payload) {
  const response = await fetch(POINTS_ACTION_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({ ok: false, error: 'Invalid API response' }));
  if (!response.ok || !result.ok) {
    throw new Error(result.error || 'Failed to send points action');
  }
}

function setupConditionalField(selectElement, triggerValue, targetName) {
  if (!selectElement) {
    return () => {};
  }

  const target = document.querySelector(`[data-conditional="${targetName}"]`);
  if (!target) {
    return () => {};
  }

  const sync = () => {
    const shouldShow = selectElement.value === triggerValue;
    target.classList.toggle('hidden', !shouldShow);
    const input = target.querySelector('input, textarea');
    if (input) {
      input.required = shouldShow;
      if (!shouldShow) {
        input.value = '';
      }
    }
  };

  if (!selectElement.dataset.conditionalBound) {
    selectElement.addEventListener('change', sync);
    selectElement.addEventListener('input', sync);
    selectElement.dataset.conditionalBound = 'true';
  }
  sync();
  return sync;
}

function normalizeChoice(value) {
  return String(value || '').trim().toLowerCase();
}

function createSearchableInput(input, getOptions) {
  if (!input) {
    return { refresh() {} };
  }

  if (!input.parentElement.classList.contains('searchable-wrap')) {
    input.parentElement.classList.add('searchable-wrap');
  }

  let list = input.parentElement.querySelector('.searchable-list');
  if (!list) {
    list = document.createElement('div');
    list.className = 'searchable-list hidden';
    input.insertAdjacentElement('afterend', list);
  }

  let activeIndex = -1;

  const selectOption = (option) => {
    input.value = option;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    list.classList.add('hidden');
    activeIndex = -1;
  };

  const syncActiveOption = () => {
    const buttons = Array.from(list.querySelectorAll('.searchable-option'));
    buttons.forEach((button, index) => {
      button.classList.toggle('active', index === activeIndex);
      if (index === activeIndex) {
        button.scrollIntoView({ block: 'nearest' });
      }
    });
  };

  const getFilteredOptions = () => {
    const options = Array.from(new Set(getOptions().filter(Boolean)));
    const query = normalizeChoice(input.value);
    if (!query) {
      return options.slice(0, 12);
    }
    return options.filter((option) => normalizeChoice(option).includes(query)).slice(0, 12);
  };

  const render = () => {
    const filtered = getFilteredOptions();
    list.innerHTML = '';
    activeIndex = filtered.length > 0 ? 0 : -1;

    if (filtered.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'searchable-empty';
      empty.textContent = '沒有匹配項，可直接輸入自定義內容';
      list.appendChild(empty);
    } else {
      filtered.forEach((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'searchable-option';
        button.textContent = option;
        button.addEventListener('mousedown', (event) => {
          event.preventDefault();
          selectOption(option);
        });
        list.appendChild(button);
      });
    }

    list.classList.remove('hidden');
    syncActiveOption();
  };

  if (!input.dataset.searchableBound) {
    input.addEventListener('focus', render);
    input.addEventListener('input', render);
    input.addEventListener('keydown', (event) => {
      const buttons = Array.from(list.querySelectorAll('.searchable-option'));
      if (event.key === 'Escape') {
        list.classList.add('hidden');
        activeIndex = -1;
        return;
      }

      if (buttons.length === 0) {
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        activeIndex = activeIndex < buttons.length - 1 ? activeIndex + 1 : 0;
        syncActiveOption();
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        activeIndex = activeIndex > 0 ? activeIndex - 1 : buttons.length - 1;
        syncActiveOption();
        return;
      }

      if (event.key === 'Enter' && !list.classList.contains('hidden') && activeIndex >= 0) {
        event.preventDefault();
        selectOption(buttons[activeIndex].textContent || '');
      }
    });
    input.addEventListener('blur', () => {
      window.setTimeout(() => {
        list.classList.add('hidden');
      }, 120);
    });
    input.dataset.searchableBound = 'true';
  }

  return {
    refresh() {
      if (document.activeElement === input) {
        render();
      }
    }
  };
}

function getProductOptionsBySystem(systemValue) {
  const rawKey = String(systemValue || '').trim().toUpperCase();
  const key = SYSTEM_ALIASES[rawKey] || rawKey;
  if (SYSTEM_PRODUCT_OPTIONS[key]) {
    return SYSTEM_PRODUCT_OPTIONS[key];
  }

  return Object.values(SYSTEM_PRODUCT_OPTIONS).flat();
}

function getModuleOptionsBySelection(systemValue, productValue) {
  const rawProductKey = String(productValue || '').trim().toUpperCase();
  const productKey = PRODUCT_ALIASES[rawProductKey] || rawProductKey;
  if (PRODUCT_MODULE_OPTIONS[productKey]) {
    return PRODUCT_MODULE_OPTIONS[productKey];
  }

  const rawKey = String(systemValue || '').trim().toUpperCase();
  const key = SYSTEM_ALIASES[rawKey] || rawKey;
  if (SYSTEM_MODULE_OPTIONS[key]) {
    return SYSTEM_MODULE_OPTIONS[key];
  }

  return SEARCHABLE_OPTIONS.sapModule;
}

function loadRewardsWallet() {
  const raw = localStorage.getItem(KEYS.rewardsWallet);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveRewardsWallet(wallet) {
  localStorage.setItem(KEYS.rewardsWallet, JSON.stringify(wallet));
}

function ensureRewardsAccount(email) {
  const wallet = loadRewardsWallet();
  const key = normalizeEmail(email);
  if (!wallet[key]) {
    wallet[key] = {
      points: 0,
      history: []
    };
    saveRewardsWallet(wallet);
  }

  return wallet[key];
}

function getRewardsAccount(email) {
  ensureRewardsAccount(email);
  const wallet = loadRewardsWallet();
  return wallet[normalizeEmail(email)] || { points: 0, history: [] };
}

function commitRewardsEntry(email, entry) {
  const wallet = loadRewardsWallet();
  const key = normalizeEmail(email);
  const account = wallet[key] || { points: 0, history: [] };
  account.points += entry.delta;
  account.history.unshift({
    id: `pt_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...entry
  });
  wallet[key] = account;
  saveRewardsWallet(wallet);
  return account;
}

function hasDuplicateReferral(referrerEmail, referredEmail, referredCompany) {
  const referrals = loadList(KEYS.referrals);
  const normalizedReferrerEmail = normalizeEmail(referrerEmail);
  const normalizedReferredEmail = normalizeEmail(referredEmail);
  const normalizedCompany = String(referredCompany || '').trim().toLowerCase();

  return referrals.some(
    (item) =>
      item.referrerEmail === normalizedReferrerEmail &&
      (item.referredEmail === normalizedReferredEmail || item.referredCompany === normalizedCompany)
  );
}

function storeReferralLead(referral) {
  const referrals = loadList(KEYS.referrals);
  referrals.unshift(referral);
  saveList(KEYS.referrals, referrals);
}

function updateReferralLead(referralId, updater) {
  const referrals = loadList(KEYS.referrals);
  let updated = null;
  const nextReferrals = referrals.map((referral) => {
    if (referral.id !== referralId) {
      return referral;
    }
    updated = updater(referral);
    return updated;
  });
  saveList(KEYS.referrals, nextReferrals);
  return updated;
}

function renderPointsAccount(email, balanceElement, historyElement) {
  if (!balanceElement || !historyElement) {
    return;
  }

  const account = getRewardsAccount(email);
  balanceElement.textContent = String(account.points);
  historyElement.innerHTML = '';

  if (account.history.length === 0) {
    historyElement.innerHTML = '<p class="tip">目前尚無積分紀錄。完成推薦後會在此顯示。</p>';
    return;
  }

  account.history.forEach((entry) => {
    const item = document.createElement('article');
    item.className = 'points-entry';
    item.innerHTML = `
      <div>
        <p><strong>${entry.title}</strong></p>
        <p class="tip">${entry.description}</p>
      </div>
      <div>
        <p class="points-value ${entry.delta >= 0 ? 'positive' : 'negative'}">${
          entry.delta >= 0 ? '+' : ''
        }${entry.delta}</p>
      </div>
    `;
    historyElement.appendChild(item);
  });
}

function isSuperuser(email) {
  return SUPERUSER_EMAILS.includes(normalizeEmail(email));
}

function loadAdminRoles() {
  return Array.from(
    new Set(
      loadList(KEYS.adminRoles)
        .map((email) => normalizeEmail(email))
        .filter(Boolean)
    )
  );
}

function saveAdminRoles(emails) {
  saveList(
    KEYS.adminRoles,
    Array.from(new Set((emails || []).map((email) => normalizeEmail(email)).filter(Boolean)))
  );
}

function isAdmin(email) {
  return loadAdminRoles().includes(normalizeEmail(email));
}

function grantAdminRole(email) {
  const normalized = normalizeEmail(email);
  if (!normalized) {
    return false;
  }
  const roles = loadAdminRoles();
  if (!roles.includes(normalized)) {
    roles.push(normalized);
    saveAdminRoles(roles);
  }
  return true;
}

function revokeAdminRole(email) {
  const normalized = normalizeEmail(email);
  const roles = loadAdminRoles().filter((item) => item !== normalized);
  saveAdminRoles(roles);
}

function loadServiceCatalog() {
  const raw = localStorage.getItem(KEYS.serviceCatalog);
  if (!raw) {
    return { ...DEFAULT_SERVICE_CATALOG };
  }

  try {
    return { ...DEFAULT_SERVICE_CATALOG, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_SERVICE_CATALOG };
  }
}

function saveServiceCatalog(catalog) {
  localStorage.setItem(KEYS.serviceCatalog, JSON.stringify(catalog));
}

function loadOrders() {
  return loadList(KEYS.orders);
}

function saveOrders(orders) {
  saveList(KEYS.orders, orders);
}

function populateServiceSelect(selectElement, catalog) {
  if (!selectElement) {
    return;
  }

  const currentValue = selectElement.value;
  selectElement.innerHTML = '<option value="">請選擇服務</option>';
  Object.entries(catalog).forEach(([code, service]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${service.name}（${service.cost} 積分）`;
    if (code === currentValue) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  });
}

function populateApprovedCustomerSelect(selectElement, currentUserEmail) {
  if (!selectElement) {
    return;
  }

  const currentValue = selectElement.value;
  selectElement.innerHTML = '<option value="">請選擇已核准客戶</option>';
  const approved = loadList(KEYS.approved).filter(
    (user) => normalizeEmail(user.email) !== normalizeEmail(currentUserEmail)
  );

  approved.forEach((user) => {
    const option = document.createElement('option');
    option.value = user.email;
    option.textContent = `${user.company} / ${user.fullName} / ${user.email}`;
    if (user.email === currentValue) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  });
}

function createServiceOrder(order) {
  const orders = loadOrders();
  orders.unshift(order);
  saveOrders(orders);
  return order;
}

function updateServiceOrder(orderId, updater) {
  const orders = loadOrders();
  const nextOrders = orders.map((order) => {
    if (order.id !== orderId) {
      return order;
    }
    return updater(order);
  });
  saveOrders(nextOrders);
  return nextOrders.find((order) => order.id === orderId) || null;
}

function renderOrdersList(sessionUser, ordersListElement, onConfirm) {
  if (!ordersListElement) {
    return;
  }

  const superuser = isSuperuser(sessionUser.email);
  const orders = loadOrders().filter((order) =>
    superuser
      ? true
      : normalizeEmail(order.targetCustomerEmail) === normalizeEmail(sessionUser.email)
  );

  ordersListElement.innerHTML = '';
  if (orders.length === 0) {
    ordersListElement.innerHTML = '<p class="tip">目前尚無服務訂單。</p>';
    return;
  }

  orders.forEach((order) => {
    const article = document.createElement('article');
    article.className = 'order-item';
    article.innerHTML = `
      <h4>${order.serviceName}</h4>
      <div class="order-meta">
        <p><strong>客戶：</strong>${order.targetCustomerCompany || '未提供'} / ${order.targetCustomerName || '未提供'}</p>
        <p><strong>扣點：</strong>${order.pointsCost} 積分</p>
        <p><strong>備註：</strong>${order.orderNotes || '未提供'}</p>
        <p><strong>建立人：</strong>${order.createdByName || order.createdByEmail}</p>
      </div>
      <span class="order-status">${order.status === 'confirmed' ? '已確認並扣點' : '待客戶確認'}</span>
    `;

    const canConfirm =
      order.status === 'pending_confirmation' &&
      normalizeEmail(order.targetCustomerEmail) === normalizeEmail(sessionUser.email);
    if (canConfirm) {
      const actions = document.createElement('div');
      actions.className = 'order-actions';
      const confirmButton = document.createElement('button');
      confirmButton.type = 'button';
      confirmButton.className = 'btn primary';
      confirmButton.textContent = `確認服務並扣除 ${order.pointsCost} 積分`;
      confirmButton.addEventListener('click', () => onConfirm(order));
      actions.appendChild(confirmButton);
      article.appendChild(actions);
    }

    ordersListElement.appendChild(article);
  });
}

function registerPage() {
  const form = document.querySelector('#register-form');
  const msg = document.querySelector('#register-msg');
  const verifyForm = document.querySelector('#verify-form');
  const verifyMsg = document.querySelector('#verify-msg');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);

      const user = {
        id: `u_${Date.now()}`,
        registrationType: 'to-b',
        fullName: String(data.get('fullName') || '').trim(),
        company: String(data.get('company') || '').trim(),
        jobTitle: String(data.get('jobTitle') || '').trim(),
        officePhone: String(data.get('officePhone') || '').trim(),
        mobilePhone: String(data.get('mobilePhone') || '').trim(),
        email: normalizeEmail(data.get('email')),
        region: String(data.get('region') || '').trim(),
        password: String(data.get('password') || ''),
        verifyCode: String(Math.floor(100000 + Math.random() * 900000)),
        status: 'email_verification_pending',
        submittedAt: new Date().toISOString()
      };

      if (!user.fullName || !user.company || !user.jobTitle || !user.email || !user.password) {
        msg.textContent = '請完整填寫企業資料。';
        return;
      }

      if (!user.email.includes('@')) {
        msg.textContent = '請填寫有效的企業郵箱。';
        return;
      }

      if (!isCorporateEmail(user.email)) {
        msg.innerHTML = `僅接受企業郵箱註冊（To B 企業客戶）。To C 個人用戶請前往 <a href="${B2C_PORTAL}" target="_blank" rel="noreferrer">cogni-coding.com</a>。`;
        return;
      }

      const pendingVerify = loadList(KEYS.pendingVerify);
      const pendingReview = loadList(KEYS.pendingReview);
      const approved = loadList(KEYS.approved);
      const duplicated = [...pendingVerify, ...pendingReview, ...approved].some(
        (item) => item.email === user.email
      );

      if (duplicated) {
        msg.textContent = '此企業郵箱已存在申請，請直接驗證、等待審核或登入。';
        return;
      }

      pendingVerify.push(user);
      saveList(KEYS.pendingVerify, pendingVerify);
      form.reset();
      msg.textContent = '註冊成功，驗證碼已發送至企業郵箱，請先完成郵箱驗證。';

      try {
        await sendVerificationCodeEmail(user);
        await sendRegistrationNotification(user);
        msg.textContent += ' 已同步通知市場部進行後續審核。';
      } catch (error) {
        msg.textContent += ` 但郵件發送失敗（可先用驗證碼備援）：${user.verifyCode}。錯誤：${error}`;
      }
    });
  }

  if (verifyForm) {
    verifyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(verifyForm);
      const email = normalizeEmail(data.get('email'));
      const code = String(data.get('code') || '').trim();

      const pendingVerify = loadList(KEYS.pendingVerify);
      const pendingReview = loadList(KEYS.pendingReview);
      const target = pendingVerify.find(
        (item) => item.email === email && item.verifyCode === code
      );

      if (!target) {
        verifyMsg.textContent = '驗證失敗：企業郵箱或驗證碼不正確。';
        return;
      }

      target.status = 'review_pending';
      target.emailVerifiedAt = new Date().toISOString();
      delete target.verifyCode;

      pendingReview.push(target);
      saveList(
        KEYS.pendingVerify,
        pendingVerify.filter((item) => item.id !== target.id)
      );
      saveList(KEYS.pendingReview, pendingReview);
      verifyForm.reset();
      verifyMsg.textContent = '企業郵箱驗證成功，申請已進入待審核。';
    });
  }
}

function manufacturerRegisterPage() {
  const form = document.querySelector('#manufacturer-register-form');
  const msg = document.querySelector('#manufacturer-register-msg');
  const verifyForm = document.querySelector('#manufacturer-verify-form');
  const verifyMsg = document.querySelector('#manufacturer-verify-msg');

  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);

      const user = {
        id: `m_${Date.now()}`,
        registrationType: 'manufacturer',
        fullName: String(data.get('fullName') || '').trim(),
        company: String(data.get('company') || '').trim(),
        jobTitle: String(data.get('jobTitle') || '').trim(),
        officePhone: String(data.get('officePhone') || '').trim(),
        mobilePhone: String(data.get('mobilePhone') || '').trim(),
        email: normalizeEmail(data.get('email')),
        region: String(data.get('region') || '').trim(),
        cooperationFocus: String(data.get('cooperationFocus') || '').trim(),
        password: String(data.get('password') || ''),
        verifyCode: String(Math.floor(100000 + Math.random() * 900000)),
        status: 'email_verification_pending',
        submittedAt: new Date().toISOString()
      };

      if (!user.fullName || !user.company || !user.jobTitle || !user.email || !user.password) {
        msg.textContent = '請完整填寫原廠合作資料。';
        return;
      }

      if (!user.email.includes('@')) {
        msg.textContent = '請填寫有效的企業郵箱。';
        return;
      }

      if (!isCorporateEmail(user.email)) {
        msg.textContent = '僅接受企業郵箱申請原廠合作。';
        return;
      }

      const pendingVerify = loadList(KEYS.mPendingVerify);
      const pendingReview = loadList(KEYS.mPendingReview);
      const approved = loadList(KEYS.mApproved);
      const duplicated = [...pendingVerify, ...pendingReview, ...approved].some(
        (item) => item.email === user.email
      );

      if (duplicated) {
        msg.textContent = '此企業郵箱已存在原廠合作申請，請直接驗證或等待審核。';
        return;
      }

      pendingVerify.push(user);
      saveList(KEYS.mPendingVerify, pendingVerify);
      form.reset();
      msg.textContent = '提交成功，驗證碼已發送至企業郵箱，請先完成郵箱驗證。';

      try {
        await sendVerificationCodeEmail(user);
        await sendRegistrationNotification(user);
        msg.textContent += ' 已同步通知原廠合作審核團隊。';
      } catch (error) {
        msg.textContent += ` 但郵件發送失敗（可先用驗證碼備援）：${user.verifyCode}。錯誤：${error}`;
      }
    });
  }

  if (verifyForm) {
    verifyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(verifyForm);
      const email = normalizeEmail(data.get('email'));
      const code = String(data.get('code') || '').trim();

      const pendingVerify = loadList(KEYS.mPendingVerify);
      const pendingReview = loadList(KEYS.mPendingReview);
      const target = pendingVerify.find(
        (item) => item.email === email && item.verifyCode === code
      );

      if (!target) {
        verifyMsg.textContent = '驗證失敗：企業郵箱或驗證碼不正確。';
        return;
      }

      target.status = 'review_pending';
      target.emailVerifiedAt = new Date().toISOString();
      delete target.verifyCode;

      pendingReview.push(target);
      saveList(
        KEYS.mPendingVerify,
        pendingVerify.filter((item) => item.id !== target.id)
      );
      saveList(KEYS.mPendingReview, pendingReview);
      verifyForm.reset();
      verifyMsg.textContent = '企業郵箱驗證成功，原廠合作申請已進入待審核。';
    });
  }
}

function adminPage() {
  const panel = document.querySelector('#pending-list');
  const mPanel = document.querySelector('#pending-manufacturer-list');
  if (!panel && !mPanel) {
    return;
  }

  function renderEnterprise() {
    if (!panel) {
      return;
    }

    const pending = loadList(KEYS.pendingReview);
    panel.innerHTML = '';

    if (pending.length === 0) {
      panel.innerHTML = '<p>目前沒有待審核申請。</p>';
      return;
    }

    pending.forEach((user) => {
      const wrapper = document.createElement('article');
      wrapper.className = 'review-item';
      wrapper.innerHTML = `
        <p><strong>姓名：</strong>${user.fullName}</p>
        <p><strong>職位：</strong>${user.jobTitle}</p>
        <p><strong>公司：</strong>${user.company}</p>
        <p><strong>企業郵箱：</strong>${user.email}</p>
        <p><strong>企業座機：</strong>${user.officePhone}</p>
        <p><strong>手機：</strong>${user.mobilePhone}</p>
        <p><strong>國家/地區：</strong>${user.region || '未提供'}</p>
      `;

      const approveBtn = document.createElement('button');
      approveBtn.className = 'btn primary';
      approveBtn.textContent = '審核通過';
      approveBtn.addEventListener('click', () => approveUser(user.id));

      const rejectBtn = document.createElement('button');
      rejectBtn.className = 'btn';
      rejectBtn.textContent = '駁回';
      rejectBtn.addEventListener('click', () => rejectUser(user.id));

      const actions = document.createElement('div');
      actions.className = 'actions';
      actions.appendChild(approveBtn);
      actions.appendChild(rejectBtn);

      wrapper.appendChild(actions);
      panel.appendChild(wrapper);
    });
  }

  function renderManufacturer() {
    if (!mPanel) {
      return;
    }

    const pending = loadList(KEYS.mPendingReview);
    mPanel.innerHTML = '';

    if (pending.length === 0) {
      mPanel.innerHTML = '<p>目前沒有原廠合作待審核申請。</p>';
      return;
    }

    pending.forEach((user) => {
      const wrapper = document.createElement('article');
      wrapper.className = 'review-item';
      wrapper.innerHTML = `
        <p><strong>聯絡人：</strong>${user.fullName}</p>
        <p><strong>職位：</strong>${user.jobTitle}</p>
        <p><strong>公司全名：</strong>${user.company}</p>
        <p><strong>企業郵箱：</strong>${user.email}</p>
        <p><strong>企業座機：</strong>${user.officePhone}</p>
        <p><strong>手機：</strong>${user.mobilePhone}</p>
        <p><strong>國家/地區：</strong>${user.region || '未提供'}</p>
        <p><strong>合作方向：</strong>${user.cooperationFocus || '未提供'}</p>
      `;

      const approveBtn = document.createElement('button');
      approveBtn.className = 'btn primary';
      approveBtn.textContent = '審核通過';
      approveBtn.addEventListener('click', () => approveManufacturer(user.id));

      const rejectBtn = document.createElement('button');
      rejectBtn.className = 'btn';
      rejectBtn.textContent = '駁回';
      rejectBtn.addEventListener('click', () => rejectManufacturer(user.id));

      const actions = document.createElement('div');
      actions.className = 'actions';
      actions.appendChild(approveBtn);
      actions.appendChild(rejectBtn);

      wrapper.appendChild(actions);
      mPanel.appendChild(wrapper);
    });
  }

  function approveUser(id) {
    const pending = loadList(KEYS.pendingReview);
    const approved = loadList(KEYS.approved);

    const target = pending.find((item) => item.id === id);
    if (!target) {
      return;
    }

    target.status = 'approved';
    target.approvedAt = new Date().toISOString();
    approved.push(target);

    saveList(
      KEYS.pendingReview,
      pending.filter((item) => item.id !== id)
    );
    saveList(KEYS.approved, approved);

    commitRewardsEntry(target.email, {
      delta: REGISTRATION_APPROVAL_POINTS,
      title: '新註冊審核通過獎勵',
      description: `企業帳號審核通過，發放 ${REGISTRATION_APPROVAL_POINTS} 積分`
    });

    const referrals = loadList(KEYS.referrals);
    const referralMatch = referrals.find(
      (item) =>
        normalizeEmail(item.referredEmail) === normalizeEmail(target.email) &&
        item.status !== 'rewarded'
    );

    if (referralMatch) {
      updateReferralLead(referralMatch.id, (currentReferral) => ({
        ...currentReferral,
        status: 'rewarded',
        rewardedAt: new Date().toISOString(),
        approvedUserEmail: target.email
      }));

      commitRewardsEntry(referralMatch.referrerEmail, {
        delta: REFERRAL_REWARD_POINTS,
        title: '推薦 CIO 成功獎勵',
        description: `${target.company} 註冊並審核通過，發放 ${REFERRAL_REWARD_POINTS} 積分`
      });

      sendPointsAction({
        actionType: 'referral',
        fullName: referralMatch.referrerName,
        company: referralMatch.referrerCompany,
        email: referralMatch.referrerEmail,
        region: referralMatch.region,
        referral: {
          ...referralMatch,
          referredCompany: target.company,
          referredContact: target.fullName,
          referredEmail: target.email,
          rewardPoints: REFERRAL_REWARD_POINTS
        }
      }).catch(() => {});
    }

    renderEnterprise();

    sendAccessNotification(target).catch(() => {});
  }

  function rejectUser(id) {
    const pending = loadList(KEYS.pendingReview);
    saveList(
      KEYS.pendingReview,
      pending.filter((item) => item.id !== id)
    );
    renderEnterprise();
  }

  function approveManufacturer(id) {
    const pending = loadList(KEYS.mPendingReview);
    const approved = loadList(KEYS.mApproved);

    const target = pending.find((item) => item.id === id);
    if (!target) {
      return;
    }

    target.status = 'approved';
    target.approvedAt = new Date().toISOString();
    approved.push(target);

    saveList(
      KEYS.mPendingReview,
      pending.filter((item) => item.id !== id)
    );
    saveList(KEYS.mApproved, approved);
    renderManufacturer();

    sendAccessNotification(target).catch(() => {});
  }

  function rejectManufacturer(id) {
    const pending = loadList(KEYS.mPendingReview);
    saveList(
      KEYS.mPendingReview,
      pending.filter((item) => item.id !== id)
    );
    renderManufacturer();
  }

  renderEnterprise();
  renderManufacturer();
}

function loginPage() {
  const form = document.querySelector('#login-form');
  if (!form) {
    return;
  }

  const msg = document.querySelector('#login-msg');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const email = normalizeEmail(data.get('email'));
    const password = String(data.get('password') || '');

    const approved = loadList(KEYS.approved);
    const matched = approved.find(
      (user) => user.email === email && user.password === password
    );

    if (!matched) {
      msg.textContent = '登入失敗：帳號可能尚未完成企業郵箱驗證/審核，或密碼不正確。';
      return;
    }

    sessionStorage.setItem(
      KEYS.session,
      JSON.stringify({
        email: matched.email,
        fullName: matched.fullName,
        company: matched.company,
        jobTitle: matched.jobTitle,
        officePhone: matched.officePhone,
        mobilePhone: matched.mobilePhone,
        region: matched.region
      })
    );
    window.location.href = './agile-method.html';
  });
}

function manufacturerLoginPage() {
  const form = document.querySelector('#manufacturer-login-form');
  if (!form) {
    return;
  }

  const msg = document.querySelector('#manufacturer-login-msg');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const email = normalizeEmail(data.get('email'));
    const password = String(data.get('password') || '');

    const approved = loadList(KEYS.mApproved);
    const matched = approved.find(
      (user) => user.email === email && user.password === password
    );

    if (!matched) {
      msg.textContent = '登入失敗：帳號尚未啟用或密碼不正確。';
      return;
    }

    sessionStorage.setItem(
      KEYS.mSession,
      JSON.stringify({
        email: matched.email,
        fullName: matched.fullName,
        company: matched.company,
        jobTitle: matched.jobTitle,
        officePhone: matched.officePhone,
        mobilePhone: matched.mobilePhone,
        region: matched.region
      })
    );
    window.location.href = './manufacturer-hub.html';
  });
}

function protectedPage() {
  const logoutBtn = document.querySelector('#logout-btn');
  const isProtected = window.location.pathname.endsWith('/agile-method.html');
  if (!isProtected) {
    return;
  }

  const sessionRaw = sessionStorage.getItem(KEYS.session);
  if (!sessionRaw) {
    window.location.href = './login.html';
    return;
  }

  let sessionUser = null;
  try {
    sessionUser = JSON.parse(sessionRaw);
    const approved = loadList(KEYS.approved);
    const hasAccess = approved.some((user) => user.email === sessionUser.email);

    if (!hasAccess) {
      window.location.href = './login.html';
      return;
    }
  } catch {
    window.location.href = './login.html';
    return;
  }

  const bookingForm = document.querySelector('#booking-form');
  const bookingMsg = document.querySelector('#booking-msg');
  const pointsBalance = document.querySelector('#points-balance');
  const pointsHistory = document.querySelector('#points-history');
  const consultationCostDisplay = document.querySelector('#consultation-cost-display');
  const referralForm = document.querySelector('#referral-form');
  const referralMsg = document.querySelector('#referral-msg');
  const redeemForm = document.querySelector('#redeem-form');
  const redeemMsg = document.querySelector('#redeem-msg');
  const orderForm = document.querySelector('#order-form');
  const orderMsg = document.querySelector('#order-msg');
  const ordersList = document.querySelector('#orders-list');
  const superuserOrderPanel = document.querySelector('#superuser-order-panel');
  const superuserOrderForm = document.querySelector('#superuser-order-form');
  const superuserOrderMsg = document.querySelector('#superuser-order-msg');
  const serviceConfigPanel = document.querySelector('#service-config-panel');
  const serviceConfigForm = document.querySelector('#service-config-form');
  const serviceConfigMsg = document.querySelector('#service-config-msg');
  const roleManagementPanel = document.querySelector('#role-management-panel');
  const roleManagementForm = document.querySelector('#role-management-form');
  const roleTargetEmail = document.querySelector('#role-target-email');
  const roleManagementMsg = document.querySelector('#role-management-msg');
  const adminRoleList = document.querySelector('#admin-role-list');
  const adminDownloadPanel = document.querySelector('#admin-download-panel');
  const downloadUsersBtn = document.querySelector('#download-users-btn');
  const downloadUsersMsg = document.querySelector('#download-users-msg');
  const inquiryForm = document.querySelector('#b2b-inquiry-form');
  const inquiryMsg = document.querySelector('#b2b-inquiry-msg');

  const refreshServiceCatalogUi = () => {
    const serviceCatalog = loadServiceCatalog();
    const consultationService = serviceCatalog.consultation || DEFAULT_SERVICE_CATALOG.consultation;
    if (consultationCostDisplay) {
      consultationCostDisplay.textContent = String(consultationService.cost);
    }
    populateServiceSelect(orderForm?.querySelector('select[name="serviceCode"]'), serviceCatalog);
    populateServiceSelect(superuserOrderForm?.querySelector('select[name="serviceCode"]'), serviceCatalog);
    if (serviceConfigForm) {
      const nameInput = serviceConfigForm.querySelector('input[name="serviceName"]');
      const costInput = serviceConfigForm.querySelector('input[name="serviceCost"]');
      if (nameInput && document.activeElement !== nameInput) {
        nameInput.value = consultationService.name;
      }
      if (costInput && document.activeElement !== costInput) {
        costInput.value = String(consultationService.cost);
      }
    }
  };

  const refreshOrdersUi = () => {
    renderPointsAccount(sessionUser.email, pointsBalance, pointsHistory);
    renderOrdersList(sessionUser, ordersList, async (order) => {
      const account = getRewardsAccount(sessionUser.email);
      if (account.points < order.pointsCost) {
        orderMsg.textContent = `目前積分不足，確認 ${order.serviceName} 需要 ${order.pointsCost} 積分。`;
        return;
      }

      try {
        await sendPointsAction({
          actionType: 'order_confirmed',
          fullName: sessionUser.fullName,
          company: sessionUser.company,
          email: sessionUser.email,
          jobTitle: sessionUser.jobTitle,
          officePhone: sessionUser.officePhone,
          mobilePhone: sessionUser.mobilePhone,
          region: sessionUser.region,
          order
        });

        updateServiceOrder(order.id, (currentOrder) => ({
          ...currentOrder,
          status: 'confirmed',
          confirmedAt: new Date().toISOString(),
          confirmedByEmail: sessionUser.email
        }));
        commitRewardsEntry(sessionUser.email, {
          delta: -order.pointsCost,
          title: '服務訂單確認扣點',
          description: `${order.serviceName} / ${order.orderNotes}`
        });
        orderMsg.textContent = `已確認服務，扣除 ${order.pointsCost} 積分。`;
        refreshOrdersUi();
      } catch (error) {
        orderMsg.textContent = `確認服務失敗：${error}`;
      }
    });
  };

  const superuserMode = isSuperuser(sessionUser.email);
  const adminMode = isAdmin(sessionUser.email);
  const canDownloadUsers = adminMode && !superuserMode;
  if (superuserOrderPanel) {
    superuserOrderPanel.classList.toggle('hidden', !superuserMode);
  }
  if (serviceConfigPanel) {
    serviceConfigPanel.classList.toggle('hidden', !superuserMode);
  }
  if (roleManagementPanel) {
    roleManagementPanel.classList.toggle('hidden', !superuserMode);
  }
  if (adminDownloadPanel) {
    adminDownloadPanel.classList.toggle('hidden', !canDownloadUsers);
  }

  const refreshRoleManagementUi = () => {
    if (!roleTargetEmail || !adminRoleList) {
      return;
    }

    const currentValue = roleTargetEmail.value;
    const approvedUsers = loadList(KEYS.approved);
    roleTargetEmail.innerHTML = '<option value="">請選擇已核准客戶</option>';
    approvedUsers.forEach((user) => {
      const option = document.createElement('option');
      option.value = user.email;
      option.textContent = `${user.company} / ${user.fullName} / ${user.email}`;
      if (normalizeEmail(user.email) === normalizeEmail(currentValue)) {
        option.selected = true;
      }
      roleTargetEmail.appendChild(option);
    });

    const roles = loadAdminRoles();
    adminRoleList.innerHTML = '';
    if (roles.length === 0) {
      adminRoleList.innerHTML = '<p class="tip">目前沒有已授權的 Admin。</p>';
      return;
    }

    roles.forEach((email) => {
      const matched = approvedUsers.find((user) => normalizeEmail(user.email) === email);
      const wrapper = document.createElement('article');
      wrapper.className = 'review-item';
      wrapper.innerHTML = `
        <p><strong>Admin：</strong>${matched ? `${matched.company} / ${matched.fullName}` : '未匹配用戶'}</p>
        <p><strong>企業郵箱：</strong>${email}</p>
      `;

      const revokeBtn = document.createElement('button');
      revokeBtn.type = 'button';
      revokeBtn.className = 'btn';
      revokeBtn.textContent = '終止 Admin 權限';
      revokeBtn.addEventListener('click', () => {
        revokeAdminRole(email);
        roleManagementMsg.textContent = `已終止 ${email} 的 Admin 權限。`;
        refreshRoleManagementUi();
      });

      const actions = document.createElement('div');
      actions.className = 'actions';
      actions.appendChild(revokeBtn);
      wrapper.appendChild(actions);
      adminRoleList.appendChild(wrapper);
    });
  };

  if (roleManagementForm && roleTargetEmail) {
    roleManagementForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const targetEmail = normalizeEmail(roleTargetEmail.value);
      if (!targetEmail) {
        roleManagementMsg.textContent = '請先選擇目標用戶。';
        return;
      }

      const approved = loadList(KEYS.approved);
      const exists = approved.some((user) => normalizeEmail(user.email) === targetEmail);
      if (!exists) {
        roleManagementMsg.textContent = '僅可授權給已核准客戶。';
        return;
      }

      grantAdminRole(targetEmail);
      roleManagementMsg.textContent = `已授予 ${targetEmail} Admin 權限。`;
      roleManagementForm.reset();
      refreshRoleManagementUi();
    });
  }

  if (downloadUsersBtn) {
    downloadUsersBtn.addEventListener('click', () => {
      if (!canDownloadUsers) {
        downloadUsersMsg.textContent = '目前帳號不具備下載用戶數據權限。';
        return;
      }

      const approved = loadList(KEYS.approved);
      const manufacturers = loadList(KEYS.mApproved);
      const adminRoles = loadAdminRoles();
      const rows = [
        [
          'type',
          'fullName',
          'company',
          'jobTitle',
          'email',
          'officePhone',
          'mobilePhone',
          'region',
          'status',
          'approvedAt',
          'isAdmin',
          'isSuperuser'
        ]
      ];

      approved.forEach((user) => {
        const email = normalizeEmail(user.email);
        rows.push([
          'enterprise',
          user.fullName || '',
          user.company || '',
          user.jobTitle || '',
          user.email || '',
          user.officePhone || '',
          user.mobilePhone || '',
          user.region || '',
          user.status || '',
          user.approvedAt || '',
          adminRoles.includes(email) ? 'yes' : 'no',
          isSuperuser(email) ? 'yes' : 'no'
        ]);
      });

      manufacturers.forEach((user) => {
        const email = normalizeEmail(user.email);
        rows.push([
          'manufacturer',
          user.fullName || '',
          user.company || '',
          user.jobTitle || '',
          user.email || '',
          user.officePhone || '',
          user.mobilePhone || '',
          user.region || '',
          user.status || '',
          user.approvedAt || '',
          adminRoles.includes(email) ? 'yes' : 'no',
          isSuperuser(email) ? 'yes' : 'no'
        ]);
      });

      const csv = rows
        .map((row) =>
          row
            .map((value) => {
              const cell = String(value ?? '');
              if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
                return `"${cell.replace(/"/g, '""')}"`;
              }
              return cell;
            })
            .join(',')
        )
        .join('\n');

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `portal-users-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
      downloadUsersMsg.textContent = '用戶數據已導出。';
    });
  }

  refreshServiceCatalogUi();
  refreshRoleManagementUi();
  populateApprovedCustomerSelect(
    superuserOrderForm?.querySelector('select[name="targetCustomerEmail"]'),
    sessionUser.email
  );
  refreshOrdersUi();

  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(bookingForm);

      const sessionType = String(data.get('sessionType') || '').trim();
      const preferredTime = String(data.get('preferredTime') || '').trim();
      const notes = String(data.get('notes') || '').trim();

      if (!sessionType || !preferredTime) {
        bookingMsg.textContent = '請填寫 Session 類型與希望時間。';
        return;
      }

      const subject = `[Session Booking] ${sessionType} - ${sessionUser.company}`;
      const body = [
        '您好，',
        '',
        '我希望預定下一步 Session，資訊如下：',
        `- 類型：${sessionType}`,
        `- 希望時間：${preferredTime}`,
        `- 公司：${sessionUser.company}`,
        `- 姓名：${sessionUser.fullName}`,
        `- 職位：${sessionUser.jobTitle}`,
        `- 企業郵箱：${sessionUser.email}`,
        '',
        '補充需求：',
        notes || '無',
        '',
        '請回覆本郵件安排後續流程。'
      ].join('\n');

      const to = encodeURIComponent(CONTACT_EMAIL);
      const cc = encodeURIComponent(sessionUser.email);
      const mailto = `mailto:${to}?cc=${cc}&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      bookingMsg.textContent = '已生成雙方郵件草稿，請在郵件客戶端確認並送出。';
    });
  }

  if (referralForm) {
    referralForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(referralForm);
      const referral = {
        id: `ref_${Date.now()}`,
        referrerEmail: sessionUser.email,
        referrerName: sessionUser.fullName,
        referrerCompany: sessionUser.company,
        referrerJobTitle: sessionUser.jobTitle,
        region: sessionUser.region,
        referredCompany: String(data.get('referredCompany') || '').trim(),
        referredContact: String(data.get('referredContact') || '').trim(),
        referredEmail: normalizeEmail(data.get('referredEmail')),
        referredPhone: String(data.get('referredPhone') || '').trim(),
        interestArea: String(data.get('interestArea') || '').trim(),
        referralNotes: String(data.get('referralNotes') || '').trim(),
        rewardPoints: REFERRAL_REWARD_POINTS,
        status: 'submitted',
        submittedAt: new Date().toISOString()
      };

      if (normalizeEmail(referral.referredEmail) === normalizeEmail(referral.referrerEmail)) {
        referralMsg.textContent = '不能推薦自己，請填寫其他 CIO 的企業郵箱。';
        return;
      }

      if (!isCorporateEmail(referral.referredEmail)) {
        referralMsg.textContent = '請填寫被推薦客戶的企業郵箱。';
        return;
      }

      if (
        hasDuplicateReferral(
          referral.referrerEmail,
          referral.referredEmail,
          referral.referredCompany
        )
      ) {
        referralMsg.textContent = '這筆推薦已提交過，系統不會重複送積分。';
        return;
      }

      storeReferralLead(referral);

      try {
        await sendPointsAction({
          actionType: 'referral',
          fullName: sessionUser.fullName,
          company: sessionUser.company,
          email: sessionUser.email,
          jobTitle: sessionUser.jobTitle,
          officePhone: sessionUser.officePhone,
          mobilePhone: sessionUser.mobilePhone,
          region: sessionUser.region,
          referral
        });
        referralMsg.textContent = `推薦已提交。對方完成郵箱驗證並通過審核後，你將獲得 ${REFERRAL_REWARD_POINTS} 積分。`;
        referralForm.reset();
      } catch (error) {
        referralMsg.textContent = `推薦已記錄。對方審核通過後將發放積分；內部通知失敗：${error}`;
      }
    });
  }

  if (redeemForm) {
    redeemForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(redeemForm);
      const rewardCode = String(data.get('rewardCode') || '').trim();
      const reward = REWARD_CATALOG[rewardCode];
      if (!reward) {
        redeemMsg.textContent = '兌換項目不存在。';
        return;
      }

      const account = getRewardsAccount(sessionUser.email);
      if (account.points < reward.cost) {
        redeemMsg.textContent = `目前積分不足，${reward.name} 需要 ${reward.cost} 積分。`;
        return;
      }

      const redemption = {
        rewardCode,
        rewardName: reward.name,
        rewardCost: reward.cost,
        redeemTopic: String(data.get('redeemTopic') || '').trim(),
        preferredWindow: String(data.get('preferredWindow') || '').trim(),
        redeemNotes: String(data.get('redeemNotes') || '').trim()
      };

      try {
        await sendPointsAction({
          actionType: 'redemption',
          fullName: sessionUser.fullName,
          company: sessionUser.company,
          email: sessionUser.email,
          jobTitle: sessionUser.jobTitle,
          officePhone: sessionUser.officePhone,
          mobilePhone: sessionUser.mobilePhone,
          region: sessionUser.region,
          redemption
        });

        commitRewardsEntry(sessionUser.email, {
          delta: -reward.cost,
          title: '積分兌換小額諮詢',
          description: `${reward.name} / ${redemption.redeemTopic}`
        });
        renderPointsAccount(sessionUser.email, pointsBalance, pointsHistory);
        redeemMsg.textContent = `兌換申請已提交，已扣除 ${reward.cost} 積分。`;
        redeemForm.reset();
      } catch (error) {
        redeemMsg.textContent = `兌換提交失敗：${error}`;
      }
    });
  }

  if (orderForm) {
    orderForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(orderForm);
      const serviceCatalog = loadServiceCatalog();
      const serviceCode = String(data.get('serviceCode') || '').trim();
      const service = serviceCatalog[serviceCode];
      if (!service) {
        orderMsg.textContent = '請先選擇有效服務。';
        return;
      }

      const order = createServiceOrder({
        id: `ord_${Date.now()}`,
        status: 'pending_confirmation',
        serviceCode,
        serviceName: service.name,
        pointsCost: service.cost,
        orderNotes: String(data.get('orderNotes') || '').trim(),
        targetCustomerEmail: sessionUser.email,
        targetCustomerName: sessionUser.fullName,
        targetCustomerCompany: sessionUser.company,
        createdByEmail: sessionUser.email,
        createdByName: sessionUser.fullName,
        createdAt: new Date().toISOString()
      });

      try {
        await sendPointsAction({
          actionType: 'order_created',
          fullName: sessionUser.fullName,
          company: sessionUser.company,
          email: sessionUser.email,
          jobTitle: sessionUser.jobTitle,
          officePhone: sessionUser.officePhone,
          mobilePhone: sessionUser.mobilePhone,
          region: sessionUser.region,
          order
        });
        orderMsg.textContent = '訂單已生成，確認服務後才會正式扣除積分。';
        orderForm.reset();
        refreshServiceCatalogUi();
        refreshOrdersUi();
      } catch (error) {
        orderMsg.textContent = `訂單已生成，但通知失敗：${error}`;
        refreshOrdersUi();
      }
    });
  }

  if (superuserOrderForm) {
    superuserOrderForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(superuserOrderForm);
      const approvedUsers = loadList(KEYS.approved);
      const targetCustomerEmail = normalizeEmail(data.get('targetCustomerEmail'));
      const targetUser = approvedUsers.find((user) => normalizeEmail(user.email) === targetCustomerEmail);
      const serviceCatalog = loadServiceCatalog();
      const serviceCode = String(data.get('serviceCode') || '').trim();
      const service = serviceCatalog[serviceCode];

      if (!targetUser) {
        superuserOrderMsg.textContent = '請選擇有效的已核准客戶。';
        return;
      }

      if (!service) {
        superuserOrderMsg.textContent = '請先選擇有效服務。';
        return;
      }

      const order = createServiceOrder({
        id: `ord_${Date.now()}`,
        status: 'pending_confirmation',
        serviceCode,
        serviceName: service.name,
        pointsCost: service.cost,
        orderNotes: String(data.get('orderNotes') || '').trim(),
        targetCustomerEmail: targetUser.email,
        targetCustomerName: targetUser.fullName,
        targetCustomerCompany: targetUser.company,
        createdByEmail: sessionUser.email,
        createdByName: sessionUser.fullName,
        createdAt: new Date().toISOString()
      });

      try {
        await sendPointsAction({
          actionType: 'order_created',
          fullName: sessionUser.fullName,
          company: sessionUser.company,
          email: sessionUser.email,
          jobTitle: sessionUser.jobTitle,
          officePhone: sessionUser.officePhone,
          mobilePhone: sessionUser.mobilePhone,
          region: sessionUser.region,
          order
        });
        superuserOrderMsg.textContent = `已替 ${targetUser.company} 生成待確認訂單。`;
        superuserOrderForm.reset();
        populateApprovedCustomerSelect(
          superuserOrderForm.querySelector('select[name="targetCustomerEmail"]'),
          sessionUser.email
        );
        refreshServiceCatalogUi();
        refreshOrdersUi();
      } catch (error) {
        superuserOrderMsg.textContent = `訂單已生成，但通知失敗：${error}`;
        refreshOrdersUi();
      }
    });
  }

  if (serviceConfigForm) {
    serviceConfigForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(serviceConfigForm);
      const serviceName = String(data.get('serviceName') || '').trim();
      const serviceCost = Number(data.get('serviceCost') || 0);

      if (!serviceName || !Number.isFinite(serviceCost) || serviceCost <= 0) {
        serviceConfigMsg.textContent = '請輸入有效的服務名稱與積分。';
        return;
      }

      const nextCatalog = {
        ...loadServiceCatalog(),
        consultation: {
          name: serviceName,
          cost: Math.round(serviceCost)
        }
      };
      saveServiceCatalog(nextCatalog);
      refreshServiceCatalogUi();
      serviceConfigMsg.textContent = `已保存設定：${serviceName} / ${Math.round(serviceCost)} 積分。`;
    });
  }

  if (inquiryForm) {
    const systemInput = inquiryForm.querySelector('input[name="system"]');
    const productInput = inquiryForm.querySelector('input[name="product"]');
    const moduleInput = inquiryForm.querySelector('input[name="sapModule"]');
    const syncSystemOther = setupConditionalField(systemInput, '其他', 'system-other');
    const syncModuleOther = setupConditionalField(moduleInput, '其他', 'module-other');
    const systemSearch = createSearchableInput(systemInput, () => SEARCHABLE_OPTIONS.system);
    const moduleSearch = createSearchableInput(moduleInput, () =>
      getModuleOptionsBySelection(systemInput.value, productInput.value)
    );
    const productSearch = createSearchableInput(productInput, () => getProductOptionsBySystem(systemInput.value));

    if (systemInput && !systemInput.dataset.productLinked) {
      systemInput.addEventListener('change', () => {
        productInput.value = '';
        moduleInput.value = '';
        productSearch.refresh();
        moduleSearch.refresh();
      });
      systemInput.addEventListener('input', () => {
        productSearch.refresh();
        moduleSearch.refresh();
      });
      systemInput.dataset.productLinked = 'true';
    }

    if (productInput && !productInput.dataset.moduleLinked) {
      productInput.addEventListener('change', () => {
        moduleInput.value = '';
        moduleSearch.refresh();
      });
      productInput.addEventListener('input', () => {
        moduleSearch.refresh();
      });
      productInput.dataset.moduleLinked = 'true';
    }

    inquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(inquiryForm);
      const payload = {
        inquiryType: 'b2b-process',
        fullName: sessionUser.fullName,
        company: sessionUser.company,
        jobTitle: sessionUser.jobTitle,
        officePhone: sessionUser.officePhone,
        mobilePhone: sessionUser.mobilePhone,
        email: sessionUser.email,
        region: sessionUser.region,
        system:
          data.get('system') === '其他'
            ? String(data.get('systemOther') || '').trim()
            : String(data.get('system') || '').trim(),
        product: String(data.get('product') || '').trim(),
        productVersion: String(data.get('productVersion') || '').trim(),
        operatingSystem: String(data.get('operatingSystem') || '').trim(),
        databaseVersion: String(data.get('databaseVersion') || '').trim(),
        sapModule:
          data.get('sapModule') === '其他'
            ? String(data.get('sapModuleOther') || '').trim()
            : String(data.get('sapModule') || '').trim(),
        problemDescription: String(data.get('problemDescription') || '').trim()
      };

      try {
        await sendInquiry(payload);
        inquiryMsg.textContent = '詢價已提交，我們會儘快跟進。';
        inquiryForm.reset();
        syncSystemOther();
        syncModuleOther();
        systemSearch.refresh();
        moduleSearch.refresh();
        productSearch.refresh();
      } catch (error) {
        inquiryMsg.textContent = `詢價提交失敗：${error}`;
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(KEYS.session);
      window.location.href = './login.html';
    });
  }
}

function manufacturerProtectedPage() {
  const logoutBtn = document.querySelector('#manufacturer-logout-btn');
  const isProtected = window.location.pathname.endsWith('/manufacturer-hub.html');
  if (!isProtected) {
    return;
  }

  const sessionRaw = sessionStorage.getItem(KEYS.mSession);
  if (!sessionRaw) {
    window.location.href = './manufacturer-login.html';
    return;
  }

  try {
    const sessionUser = JSON.parse(sessionRaw);
    const approved = loadList(KEYS.mApproved);
    const hasAccess = approved.some((user) => user.email === sessionUser.email);

    if (!hasAccess) {
      window.location.href = './manufacturer-login.html';
      return;
    }
  } catch {
    window.location.href = './manufacturer-login.html';
    return;
  }


  const inquiryForm = document.querySelector('#manufacturer-inquiry-form');
  const inquiryMsg = document.querySelector('#manufacturer-inquiry-msg');
  if (inquiryForm) {
    const packageInput = inquiryForm.querySelector('input[name="packageName"]');
    const targetSystemInput = inquiryForm.querySelector('input[name="targetSystem"]');
    const syncPackageOther = setupConditionalField(packageInput, '其他', 'package-other');
    const packageSearch = createSearchableInput(packageInput, () => SEARCHABLE_OPTIONS.packageName);
    const targetSystemSearch = createSearchableInput(targetSystemInput, () => SEARCHABLE_OPTIONS.targetSystem);

    inquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const sessionUser = JSON.parse(sessionStorage.getItem(KEYS.mSession) || '{}');
      const data = new FormData(inquiryForm);
      const payload = {
        inquiryType: 'manufacturer-package',
        fullName: sessionUser.fullName,
        company: sessionUser.company,
        jobTitle: sessionUser.jobTitle,
        officePhone: sessionUser.officePhone,
        mobilePhone: sessionUser.mobilePhone,
        email: sessionUser.email,
        region: sessionUser.region,
        packageName:
          data.get('packageName') === '其他'
            ? String(data.get('packageOther') || '').trim()
            : String(data.get('packageName') || '').trim(),
        targetSystem: String(data.get('targetSystem') || '').trim(),
        targetVersion: String(data.get('targetVersion') || '').trim(),
        inquiryNotes: String(data.get('inquiryNotes') || '').trim()
      };

      try {
        await sendInquiry(payload);
        inquiryMsg.textContent = '詢價已提交，我們會儘快跟進。';
        inquiryForm.reset();
        syncPackageOther();
        packageSearch.refresh();
        targetSystemSearch.refresh();
      } catch (error) {
        inquiryMsg.textContent = `詢價提交失敗：${error}`;
      }
    });
  }
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(KEYS.mSession);
      window.location.href = './manufacturer-login.html';
    });
  }
}

registerPage();
manufacturerRegisterPage();
adminPage();
loginPage();
manufacturerLoginPage();
protectedPage();
manufacturerProtectedPage();
