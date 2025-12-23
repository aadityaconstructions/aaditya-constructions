"use client";

import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 gradient-bg p-6 text-white rounded-t-2xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Terms & Conditions</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Contest Overview
            </h3>
            <p>
              Aaditya Buildcons is organizing a promotional contest where
              participants have the opportunity to win a 3 BHK residential flat
              measuring 1365 sq. ft., located at a prime location on Main Sikar
              Road, Jaipur, valued at approximately ₹60,00,000.
            </p>
          </section>

          <section className="space-y-2">
            <p>
              <span className="font-bold">The Promoter:</span> AadityaBuildCons
              (referred to hereafter as "ABC").
            </p>
            <p>
              <span className="font-bold">The Contest:</span> The 'Environmental
              Stewardship Challenge' (referred to hereafter as "The Challenge").
            </p>
            <p>
              <span className="font-bold">The Cause:</span> The imperative to
              identify, develop, and present highly original and impactful
              solutions favoring the reduction of environmental pollution and
              supporting ecological health, particularly concerning urban air
              quality.
            </p>
            <p>
              <span className="font-bold">
                Contest Objective & Call to Action:
              </span>{" "}
              The Challenge is launched by ABC to favor and support our
              environment by sourcing innovative, actionable, and sustainable
              strategies to combat critical environmental issues, such as severe
              urban air pollution (e.g., high AQI). ABC issues this mandate:
              "Stand for a cause and be a part of it." Entrants are required to
              submit an original, data-driven, and practical proposal addressing
              the core environmental objective. This is not a random selection
              or lottery; selection will be based strictly on the originality,
              feasibility, and measurable impact of the proposed solution.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Participation Fee
            </h3>
            <div className="space-y-2">
              <p>• The participation fee to enter this contest is ₹1111/- only.</p>
              <p>• This fee is non-refundable under any circumstances.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Eligibility
            </h3>
            <div className="space-y-2">
              <p>• Open to Indian residents aged 18 years and above.</p>
              <p>
                • Employees, partners, and immediate family members of Aaditya
                Buildcons are not eligible to participate.
              </p>
              <p>
                • Submissions must be entirely original work. Plagiarism will
                result in immediate disqualification. The method, language, and
                format of the solution must be clear, concise, and analytically
                sound.
              </p>
              <p>
                • Submissions must directly address a defined environmental
                problem and propose a concrete intervention.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Assured Rewards
            </h3>
            <div className="space-y-2">
              <p>
                • The Top 100 participants will receive an assured minimum cash
                prize of ₹10,000 each.
              </p>
              <p>
                • Winners will be selected based on the evaluation and selection
                process defined by Aaditya Buildcons.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Grand Prize – Flat Details
            </h3>
            <div className="space-y-2">
              <p>
                • One participant will win the 3 BHK flat (1365 sq ft) at Main
                Sikar Road, Jaipur.
              </p>
              <p>
                • The flat will be handed over as per specifications shared by
                Aaditya Buildcons.
              </p>
              <p>
                • Registration, stamp duty, and any legally required charges, if
                applicable, must be borne by the winner.
              </p>
              <p>
                • The winning submission, as determined by the Jury Panel, will
                secure the Grand Prize.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              No Additional Charges
            </h3>
            <p>
              Apart from the participation fee of ₹1111/-, no additional charges
              will be demanded for entering, participating, or claiming the
              rewards.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Winner Announcement Date
            </h3>
            <div className="space-y-2">
              <p>
                • All winners, including the grand prize winner and the Top 100
                assured prize winners, will be announced on the website only.
              </p>
              <p>
                • Results will be declared through the official website and
                other authorized communication channels of Aaditya Buildcons.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Winner Verification
            </h3>
            <p>
              Aaditya Buildcons reserves the right to verify details submitted
              by participants before confirming any prize.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Judging & Review Process
            </h3>
            <div className="space-y-2">
              <p>
                • All submitted entries will undergo a rigorous, non-random
                evaluation process.
              </p>
              <p>
                • The Jury Panel will review submissions based on the criteria
                of Originality, Feasibility, Measurable Impact, and Scalability.
              </p>
              <p>
                • The decision of the Jury Panel is final and binding in all
                respects.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Contest Validity & Modifications
            </h3>
            <div className="space-y-2">
              <p>
                • Aaditya Buildcons may modify, extend, or cancel the contest if
                required.
              </p>
              <p>
                • Any such updates will be posted on the official website:
                www.aadityabuildcons.com
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Disqualification
            </h3>
            <p>
              Participants providing incorrect information, violating rules, or
              attempting fraudulent activities may be disqualified without
              refund.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Liability</h3>
            <p>
              Aaditya Buildcons is not responsible for technical errors, payment
              failures, or unforeseen issues that may affect participation.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Acceptance of Terms
            </h3>
            <p>
              By entering the contest, the participant confirms that they have
              read, understood, and agreed to all Terms & Conditions stated
              above.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
