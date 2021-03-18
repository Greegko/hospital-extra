## API contract

```
interface APIResponse {
  drugs: string;
  dosages: string;
  patients: string;
  time: number;
}
```

```
Example API output:
{
  drugs: 'As,I,P,I,P',
  dosages: '1000,50,250,10,10',
  patients: 'X,X,H,H,H,X,H',
  time: 1000000000
}
```

## Expected output

Command

```
npm run start
```

Expected report console output

```
 ====
 Report 15 April 2021
 Patients in the ward:
 Total: 19
 List: 5 Healthy, 13 Dead, 1 Diabetic...
 Administrated drugs: Paracetamol 15 mg, Insulin: 10 μg, Aspirin: 5 mg
 ====
```
