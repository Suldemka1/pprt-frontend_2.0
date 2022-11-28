export default function SendButton(params) {
  return (
    <button
      type="submit"
      disabled={!params.offerCheck}
      onClick={params.onClick}
      className={params.className}
    >
      Отправить
    </button>
  );
}
