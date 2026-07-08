export function DoneStep() {
  return (
    <div className="done-panel">
      <div className="done-check" aria-hidden>
        ✓
      </div>
      <h2>お申し込みを受け付けました</h2>
      <p className="lead">
        ありがとうございました。担当より追ってご連絡します。
        <br />
        <span className="demo-note">（デモのため、実際の申込・契約は行われません）</span>
      </p>
    </div>
  );
}
