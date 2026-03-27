/* ════════════════════════════════════════════
   app.js — Engineering Branch Quiz Logic
   ════════════════════════════════════════════ */

// ── CONSTANTS ──
const TOTAL = 15;
const TIME  = 20;

// ── QUIZ STATE ──
let student        = { name: '', roll: '', branch: '', branchLabel: '' };
let selectedBranch = '';
let QUESTIONS      = [];
let cur            = 0;
let score          = 0;
let timerInterval  = null;
let tLeft          = TIME;
let answered       = false;
let hintUsed       = false;
let userAnswers    = [];
let timeTaken      = [];

/* ════════════════════════════════════════════
   SCREEN NAVIGATION
   ════════════════════════════════════════════ */

/**
 * Show a screen by its ID, hiding all others.
 * @param {string} id - The screen element ID
 */
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  // Re-trigger animation
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'fadeUp .55s ease both';
}

/** Navigate from splash to registration screen */
function goToReg() {
  show('reg-screen');
}

/* ════════════════════════════════════════════
   REGISTRATION
   ════════════════════════════════════════════ */

/**
 * Toggle branch selection.
 * @param {HTMLElement} el - The clicked branch option element
 */
function selectBranch(el) {
  document.querySelectorAll('.branch-opt').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  selectedBranch = el.dataset.branch;
}

/** Validate registration form and start quiz */
function submitReg() {
  const name = document.getElementById('inp-name').value.trim();
  const roll = document.getElementById('inp-roll').value.trim();
  const err  = document.getElementById('err-msg');

  if (!name || !roll || !selectedBranch) {
    err.style.display = 'block';
    return;
  }

  err.style.display = 'none';
  student = {
    name,
    roll,
    branch:      selectedBranch,
    branchLabel: BRANCH_LABELS[selectedBranch]
  };

  initQuiz();
}

/* ════════════════════════════════════════════
   QUIZ INITIALISATION
   ════════════════════════════════════════════ */

/** Shuffle questions, reset state, and launch quiz screen */
function initQuiz() {
  // Fisher-Yates shuffle of branch question pool
  const pool = [...QUESTION_BANK[student.branch]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  QUESTIONS    = pool.slice(0, TOTAL);
  cur          = 0;
  score        = 0;
  userAnswers  = [];
  timeTaken    = [];

  // Populate the student info bar
  document.getElementById('bar-name').textContent   = student.name;
  document.getElementById('bar-roll').textContent   = student.roll;
  document.getElementById('bar-branch').textContent = student.branchLabel;

  show('quiz-screen');
  loadQ();
}

/* ════════════════════════════════════════════
   QUESTION LOADING
   ════════════════════════════════════════════ */

/** Load and render the current question */
function loadQ() {
  answered = false;
  hintUsed = false;
  tLeft    = TIME;

  const q = QUESTIONS[cur];

  // Header / progress
  document.getElementById('q-label').textContent   = `Question ${cur + 1} of ${TOTAL}`;
  document.getElementById('live-score').textContent = `⭐ Score: ${score}`;
  document.getElementById('prog-fill').style.width  = `${(cur / TOTAL) * 100}%`;
  document.getElementById('prog-txt').textContent   = `${cur} of ${TOTAL} done`;

  // Category tag
  const tag = document.getElementById('cat-tag');
  tag.textContent        = q.cat;
  tag.style.background   = q.catBg;
  tag.style.color        = q.catCl;

  // Question text & type icon
  document.getElementById('q-text').textContent     = q.text;
  document.getElementById('q-type-icon').textContent = q.type === 'tf' ? '✅❌' : '❓';

  // MCQ / T-F badge
  const badge = document.getElementById('type-badge');
  if (q.type === 'tf') {
    badge.textContent       = 'TRUE / FALSE';
    badge.style.background  = '#e8f5e9';
    badge.style.color       = '#2d7a22';
    badge.style.borderColor = '#7bbf6a';
  } else {
    badge.textContent       = 'MCQ';
    badge.style.background  = '#dff0fa';
    badge.style.color       = '#2060a0';
    badge.style.borderColor = '#5aabdc';
  }

  // Reset UI elements
  document.getElementById('hint-box').classList.remove('show');
  document.getElementById('hint-box').textContent      = '';
  document.getElementById('hint-btn').disabled         = false;
  document.getElementById('feedback-bar').style.display = 'none';
  document.getElementById('next-btn').classList.remove('show');

  // Build answer buttons
  buildAnswers(q);

  // Timer
  resetTimer();
  startTimer();

  // Re-trigger card animation
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeUp .4s ease';
}

/* ════════════════════════════════════════════
   ANSWER BUILDING
   ════════════════════════════════════════════ */

/**
 * Render MCQ option buttons or True/False buttons.
 * @param {Object} q - Question object
 */
function buildAnswers(q) {
  const area = document.getElementById('answers-area');
  area.innerHTML = '';

  if (q.type === 'mcq') {
    const grid   = document.createElement('div');
    grid.className = 'options-grid';
    const labels = ['A', 'B', 'C', 'D'];

    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = `<span class="opt-letter">${labels[i]}</span><span class="opt-txt">${opt}</span>`;
      btn.onclick   = () => pickMCQ(i, btn);
      grid.appendChild(btn);
    });

    area.appendChild(grid);

  } else {
    const grid   = document.createElement('div');
    grid.className = 'tf-grid';

    const options = [
      { val: true,  icon: '✅', label: 'TRUE',  cls: 'true-btn'  },
      { val: false, icon: '❌', label: 'FALSE', cls: 'false-btn' }
    ];

    options.forEach(o => {
      const btn = document.createElement('button');
      btn.className = `tf-btn ${o.cls}`;
      btn.innerHTML = `<span class="tf-icon">${o.icon}</span><span class="tf-label">${o.label}</span>`;
      btn.onclick   = () => pickTF(o.val, btn);
      grid.appendChild(btn);
    });

    area.appendChild(grid);
  }
}

/* ════════════════════════════════════════════
   ANSWER SELECTION
   ════════════════════════════════════════════ */

/**
 * Handle MCQ answer click.
 * @param {number} idx - Index of chosen option
 * @param {HTMLElement} btn - The clicked button
 */
function pickMCQ(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  timeTaken.push(TIME - tLeft);

  const q = QUESTIONS[cur];
  dimAll('.opt-btn');

  if (idx === q.ans) {
    btn.classList.remove('dim');
    btn.classList.add('correct');
    score++;
    refreshScore();
    feedback(true, '✅ Correct! ' + q.exp);
    userAnswers.push({ chosen: q.opts[idx], correct: q.opts[q.ans], ok: true });
  } else {
    btn.classList.remove('dim');
    btn.classList.add('wrong');
    revealCorrectMCQ();
    feedback(false, '❌ Incorrect! ' + q.exp);
    userAnswers.push({ chosen: q.opts[idx], correct: q.opts[q.ans], ok: false });
  }

  showNextBtn();
}

/**
 * Handle True/False answer click.
 * @param {boolean} val - true or false
 * @param {HTMLElement} btn - The clicked button
 */
function pickTF(val, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  timeTaken.push(TIME - tLeft);

  const q      = QUESTIONS[cur];
  const isRight = val === q.ans;
  dimAll('.tf-btn');

  btn.classList.remove('dim');
  btn.classList.add(isRight ? 'correct' : 'wrong');
  if (!isRight) revealCorrectTF();

  if (isRight) {
    score++;
    refreshScore();
    feedback(true, '✅ Correct! ' + q.exp);
  } else {
    feedback(false, '❌ Incorrect! ' + q.exp);
  }

  userAnswers.push({
    chosen:  val ? 'TRUE' : 'FALSE',
    correct: q.ans ? 'TRUE' : 'FALSE',
    ok:      isRight
  });

  showNextBtn();
}

/* ════════════════════════════════════════════
   ANSWER REVEAL HELPERS
   ════════════════════════════════════════════ */

/** Dim all buttons matching a CSS selector */
function dimAll(sel) {
  document.querySelectorAll(sel).forEach(b => b.classList.add('dim'));
}

/** Highlight the correct MCQ option */
function revealCorrectMCQ() {
  const btns = document.querySelectorAll('.opt-btn');
  btns[QUESTIONS[cur].ans].classList.remove('dim');
  btns[QUESTIONS[cur].ans].classList.add('correct');
}

/** Highlight the correct True/False option */
function revealCorrectTF() {
  const correctVal = QUESTIONS[cur].ans;
  document.querySelectorAll('.tf-btn').forEach(b => {
    const isTrueBtn = b.classList.contains('true-btn');
    if ((correctVal && isTrueBtn) || (!correctVal && !isTrueBtn)) {
      b.classList.remove('dim');
      b.classList.add('correct');
    }
  });
}

/* ════════════════════════════════════════════
   FEEDBACK BAR
   ════════════════════════════════════════════ */

/**
 * Show the feedback bar with correct/wrong/timeout styling.
 * @param {boolean|null} ok - true=correct, false=wrong, null=timeout
 * @param {string} msg - Message to display
 */
function feedback(ok, msg) {
  const bar = document.getElementById('feedback-bar');
  bar.className   = 'feedback-bar ' + (ok ? 'correct' : ok === false ? 'wrong' : 'timeout');
  bar.textContent = msg;
  bar.style.display = 'flex';
}

/** Update the live score display */
function refreshScore() {
  document.getElementById('live-score').textContent = `⭐ Score: ${score}`;
}

/** Show and label the Next / Results button */
function showNextBtn() {
  const btn = document.getElementById('next-btn');
  btn.classList.add('show');
  btn.textContent = cur === TOTAL - 1 ? 'See My Results 🏆' : 'Next Question →';
}

/* ════════════════════════════════════════════
   HINT
   ════════════════════════════════════════════ */

/** Reveal the hint for the current question (one-time per question) */
function showHint() {
  if (hintUsed || answered) return;
  hintUsed = true;
  const box = document.getElementById('hint-box');
  box.textContent = '💡 ' + QUESTIONS[cur].hint;
  box.classList.add('show');
  document.getElementById('hint-btn').disabled = true;
}

/* ════════════════════════════════════════════
   TIMER
   ════════════════════════════════════════════ */

/** Reset the timer bar to full and clear any running interval */
function resetTimer() {
  clearInterval(timerInterval);
  tLeft = TIME;
  document.getElementById('t-fill').style.width  = '100%';
  document.getElementById('t-fill').className    = 't-fill';
  document.getElementById('t-num').textContent   = TIME;
  document.getElementById('t-num').classList.remove('pulse');
}

/** Start the countdown timer */
function startTimer() {
  timerInterval = setInterval(() => {
    tLeft--;

    const pct  = (tLeft / TIME) * 100;
    const fill = document.getElementById('t-fill');
    fill.style.width = pct + '%';
    fill.className   = 't-fill' + (tLeft <= 5 ? ' danger' : tLeft <= 10 ? ' warn' : '');

    document.getElementById('t-num').textContent = tLeft;
    if (tLeft <= 5) document.getElementById('t-num').classList.add('pulse');

    if (tLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

/** Handle time expiry — auto-reveal answer */
function timeUp() {
  if (answered) return;
  answered = true;
  timeTaken.push(TIME);

  const q = QUESTIONS[cur];
  dimAll('.opt-btn');
  dimAll('.tf-btn');

  if (q.type === 'mcq') revealCorrectMCQ();
  else                   revealCorrectTF();

  feedback(null, '⏰ Time\'s up! ' + q.exp);

  userAnswers.push({
    chosen:  '(no answer)',
    correct: q.type === 'mcq' ? q.opts[q.ans] : (q.ans ? 'TRUE' : 'FALSE'),
    ok:      false
  });

  showNextBtn();
}

/* ════════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════════ */

/** Advance to next question or show result screen */
function nextQ() {
  cur++;
  if (cur >= TOTAL) showResult();
  else              loadQ();
}

/* ════════════════════════════════════════════
   RESULT SCREEN
   ════════════════════════════════════════════ */

/** Calculate final score and render the result screen */
function showResult() {
  show('result-screen');

  // Student info
  document.getElementById('res-name').textContent   = student.name;
  document.getElementById('res-roll').textContent   = student.roll;
  document.getElementById('res-branch').textContent = student.branchLabel;

  // Score ring
  const pct = score / TOTAL;
  document.getElementById('ring-n').textContent = score;
  document.getElementById('ring-d').textContent = `out of ${TOTAL}`;

  // Pills
  document.getElementById('pill-c').textContent = `✓ ${score} Correct`;
  document.getElementById('pill-w').textContent = `✗ ${TOTAL - score} Wrong`;
  const avg = timeTaken.length
    ? Math.round(timeTaken.reduce((a, b) => a + b, 0) / timeTaken.length)
    : 0;
  document.getElementById('pill-t').textContent = `⏱ ${avg}s avg`;

  // Grade message
  let emoji, title, sub, grade;
  if (pct === 1) {
    emoji = '🏆'; title = 'Perfect Score!';
    sub   = 'Incredible! Every answer correct!';
    grade = `${student.name}, you are a ${student.branchLabel} champion! Absolutely flawless!`;
  } else if (pct >= 0.8) {
    emoji = '🌟'; title = 'Excellent!';
    sub   = 'Outstanding performance!';
    grade = `Well done, ${student.name}! Your ${student.branchLabel} knowledge is impressive. Just a tiny slip from perfection!`;
  } else if (pct >= 0.6) {
    emoji = '👏'; title = 'Good Job!';
    sub   = 'A solid performance.';
    grade = `Good work, ${student.name}! Keep revising your ${student.branchLabel} subjects to score even higher!`;
  } else if (pct >= 0.4) {
    emoji = '📚'; title = 'Keep It Up!';
    sub   = 'Decent attempt with room to grow.';
    grade = `Don't give up, ${student.name}! Review your ${student.branchLabel} fundamentals and try again!`;
  } else {
    emoji = '💪'; title = 'Keep Practising!';
    sub   = 'Every expert starts somewhere!';
    grade = `${student.name}, revisit your ${student.branchLabel} basics — reviewing the answers will help you improve fast!`;
  }

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-title').textContent = title;
  document.getElementById('res-sub').textContent   = sub;
  document.getElementById('grade-box').textContent = grade;

  // Animated score ring
  const circ = 389.56;
  const arc  = document.getElementById('ring-arc');
  const col  = pct >= 0.8 ? '#7bbf6a' : pct >= 0.5 ? '#f0a500' : '#f07060';
  arc.setAttribute('stroke', col);
  setTimeout(() => {
    arc.style.strokeDashoffset = circ - pct * circ;
  }, 350);
}

/* ════════════════════════════════════════════
   RETRY / REVIEW
   ════════════════════════════════════════════ */

/** Go back to registration screen to play again */
function retryQuiz() {
  show('reg-screen');
}

/** Open the answer review modal */
function openReview() {
  const list = document.getElementById('rev-list');
  list.innerHTML = '';

  QUESTIONS.forEach((q, i) => {
    const ua  = userAnswers[i] || {};
    const div = document.createElement('div');
    div.className = 'rev-item ' + (ua.ok ? 'ok' : 'bad');

    const qLabel = q.type === 'tf' ? '[True/False] ' : '[MCQ] ';
    div.innerHTML = `
      <div class="rev-q">${i + 1}. ${qLabel}${q.text}</div>
      <div class="rev-d">
        Your answer: <strong>${ua.chosen || '—'}</strong><br>
        Correct: <strong>${ua.correct || ''}</strong>
      </div>`;
    list.appendChild(div);
  });

  document.getElementById('modal').style.display = 'block';
}

/** Close the review modal */
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

/**
 * Close modal when clicking outside the modal content.
 * @param {MouseEvent} e
 */
function modalClickOut(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}