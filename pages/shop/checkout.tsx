import { useRouter } from "next/router";
import { useMemo } from "react";
import BackLink from "../../components/BackLink";
import PageHeading from "../../components/PageHeading";
import calculatePrice from "../../lib/calculatePrice";

export default function Checkout() {
  const router = useRouter()

  const amount = useMemo(() => calculatePrice(router.query), [router.query])

  return (
    <div className="flex flex-col gap-8 items-center">
      <BackLink href='/shop'>Cancel</BackLink>
      <PageHeading>Checkout ${amount.toString()}</PageHeading>
    </div>
  )
}