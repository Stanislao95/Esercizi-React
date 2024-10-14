


function AgeRange({ age }) {
  return (
    <div>

      {age > 18 && age < 65 ? `Iam ${age} yars old` : `age range is incorrect`}
    </div>
  );
}
export default AgeRange