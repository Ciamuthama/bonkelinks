import Image from "next/image";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="text-white p-3 mb-2 mx-10 flex gap-10 justify-around">
      <div className="flex flex-col w-full justify-between">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-[24px]">Quick Links</h4>
            <Link href="/" className="text-base">
              Home
            </Link>
            <Link href={`/about`} className="text-base">
              About
            </Link>
            <Link href={`/contact`} className="text-base">
              Contact
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-[24px]">Contact</h3>
            <div>
              <p className="text-base">
                <a href="tel:0718176143 " title="call us today">
                  Call: 0718176143/0791198551
                </a>
              </p>
              <p className="text-base">
                <a href="mailto: bonkelinks16@gmail.com" title="email us today">
                  Email us: bonkelinks16@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
        <div>
          <h3 className="font-semibold text-[24px]">Social Media</h3>
          <div className="flex  gap-3">
            <a href="https://" title="facebook">
              <Image
                src="/facebook.svg"
                width={30}
                height={30}
                alt="facebook"
              />
            </a>
            <a href="https://" title="twitter(X)">
              <Image src="/twitter.svg" width={30} height={30} alt="twitter" />
            </a>
            <a href="https://" title="Instagram">
              <Image
                src="/instagram.svg"
                width={30}
                height={30}
                alt="instagram"
              />
            </a>
            <a href="https://" title="LinkedIn">
              <Image
                src="/linkedin.svg"
                width={30}
                height={30}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <iframe
          title="bonkelinks location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1994.877927725499!2d37.65475595124154!3d-0.32061189718356553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2ske!4v1742193346087!5m2!1sen!2ske"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
